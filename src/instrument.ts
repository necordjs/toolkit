import { NodeSDK } from '@opentelemetry/sdk-node';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import {
	getNodeAutoInstrumentations,
	getResourceDetectors
} from '@opentelemetry/auto-instrumentations-node';
import { Logger } from '@nestjs/common';
import { resourceFromAttributes, DetectedResourceAttributes } from '@opentelemetry/resources';
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions';
import { metrics } from '@opentelemetry/api';
import { setupNodeMetrics } from '@sesamecare-oss/opentelemetry-node-metrics';
import * as Sentry from '@sentry/nestjs';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import { SentryPropagator, SentrySampler, SentrySpanProcessor } from '@sentry/opentelemetry';

const logger = new Logger('OpenTelemetry');
const version = process.env.npm_package_version;

const sentryClient = Sentry.init({
	dsn: process.env.SENTRY_DSN,
	release: `toolkit@${version}`,
	skipOpenTelemetrySetup: true,
	integrations: [
		// Add our Profiling integration
		nodeProfilingIntegration(),
		Sentry.httpIntegration(),
		Sentry.nestIntegration(),
		Sentry.onUncaughtExceptionIntegration(),
		Sentry.onUnhandledRejectionIntegration()
	],

	// Add Tracing by setting tracesSampleRate
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,

	// Set sampling rate for profiling
	// This is relative to tracesSampleRate
	profilesSampleRate: 1.0
});

const metricReader = new PrometheusExporter({ port: 8081 }, () =>
	logger.log('Prometheus scrape endpoint started on port 8081')
);

export const attributes: Record<string, string> = {
	[ATTR_SERVICE_NAME]: 'toolkit',
	'service.namespace': 'necord',
	[ATTR_SERVICE_VERSION]: version
};

const resource = resourceFromAttributes(attributes);

const instrumentations = [getNodeAutoInstrumentations()];

export const otelSDK = new NodeSDK({
	resource,
	metricReader,
	instrumentations,
	resourceDetectors: getResourceDetectors(),
	sampler: sentryClient ? new SentrySampler(sentryClient) : undefined,
	spanProcessors: [new SentrySpanProcessor()],
	textMapPropagator: new SentryPropagator(),
	contextManager: new Sentry.SentryContextManager()
});

Sentry.validateOpenTelemetrySetup();

setImmediate(() => {
	const meterProvider = metrics.getMeterProvider();
	const meter = meterProvider.getMeter('node-metrics');
	setupNodeMetrics(meter, { labels: resource.attributes as any });
});

// You can also use the shutdown method to gracefully shut down the SDK before process shutdown
// or on some operating system signal.
process.on('SIGTERM', () => {
	otelSDK
		.shutdown()
		.then(
			() => logger.verbose('SDK shut down successfully'),
			err => logger.error('Error shutting down SDK', err)
		)
		.finally(() => process.exit(0));
});
