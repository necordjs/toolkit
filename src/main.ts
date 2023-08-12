import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('Runtime');

async function bootstrap() {
	const app = await NestFactory.createApplicationContext(AppModule);

	return app.init();
}

bootstrap();
