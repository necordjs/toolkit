import { otelSDK } from './instrument';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	otelSDK.start();
	const app = await NestFactory.createApplicationContext(AppModule);

	return app.init();
}

void bootstrap();
