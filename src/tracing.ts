import { NodeSDK } from '@opentelemetry/sdk-node';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { Logger } from '@nestjs/common';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const logger = new Logger('OpenTelemetry');

const otelSDK = new NodeSDK({
	resource: new Resource({
		[SemanticResourceAttributes.SERVICE_NAME]: 'necord'
	}),
	metricReader: new PrometheusExporter({
		port: 8081
	}),
	instrumentations: [getNodeAutoInstrumentations()]
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
