import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.createApplicationContext(AppModule);

	return app.init();
}

bootstrap();

process.on('unhandledRejection', err => {}).on('uncaughtException', err => {});
