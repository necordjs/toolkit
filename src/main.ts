import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module.js';
import { otelSDK } from './instrument.js';

async function bootstrap() {
	otelSDK.start();
	const app = await NestFactory.createApplicationContext(AppModule);

	return app.init();
}

void bootstrap();
