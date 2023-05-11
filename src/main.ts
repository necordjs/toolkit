import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('Runtime');

async function bootstrap() {
	const app = await NestFactory.createApplicationContext(AppModule);

	return app.init();
}

bootstrap();

process.on('uncaughtException', (err, origin) => {
	logger.error(`Caught exception: ${err.message}\nException origin: ${origin}`, err);
});

process.on('unhandledRejection', (reason, promise) => {
	logger.error(`Unhandled Rejection at: ${String(promise)}\nreason: ${String(reason)}`);
});
