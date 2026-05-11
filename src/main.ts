import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { otelSDK } from './instrument';

async function bootstrap() {
	otelSDK.start();
	const app = await NestFactory.createApplicationContext(AppModule);

	return app.init();
}

void bootstrap();
