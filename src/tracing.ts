import { NodeSDK } from '@opentelemetry/sdk-node';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import {
	getNodeAutoInstrumentations,
	getResourceDetectors
} from '@opentelemetry/auto-instrumentations-node';
import { Logger } from '@nestjs/common';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const logger = new Logger('OpenTelemetry');

const metricReader = new PrometheusExporter({ port: 8081 }, () =>
	logger.log('Prometheus scrape endpoint started on port 8081')
);

const otelSDK = new NodeSDK({
	resource: new Resource({
		[SemanticResourceAttributes.SERVICE_NAME]: 'toolkit',
		[SemanticResourceAttributes.SERVICE_NAMESPACE]: 'necord',
		[SemanticResourceAttributes.SERVICE_VERSION]: '1.0.0'
	}),
	metricReader,
	instrumentations: [getNodeAutoInstrumentations()],
	resourceDetectors: getResourceDetectors()
});

export default otelSDK;

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
