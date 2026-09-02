import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { SentryModule } from '@sentry/nestjs/setup';
import { OpenTelemetryModule } from 'nestjs-otel';
import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';

import { CommandMetricsInterceptor, NecordSentryExceptionFilter } from './common/index.js';
import { BitfieldsModule } from './bitfields/bitfields.module.js';
import { ChangelogModule } from './changelog/changelog.module.js';
import { GeneralModule } from './general/general.module.js';
import { DocsModule } from './docs/docs.module.js';
import { TagsModule } from './tags/tags.module.js';
import { AppService } from './app.service.js';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		SentryModule.forRoot(),
		OpenTelemetryModule.forRoot({
			metrics: {
				hostMetrics: true
			}
		}),
		NecordModule.forRootAsync({
			useFactory: (configService: ConfigService) => ({
				token: configService.getOrThrow<string>('DISCORD_TOKEN'),
				prefix: '!',
				intents: ['Guilds', 'GuildMembers', 'MessageContent'],
				development:
					configService.get('NODE_ENV', 'development') === 'development'
						? [configService.getOrThrow<string>('DISCORD_TEST_GUILD')]
						: undefined
			}),
			inject: [ConfigService]
		}),
		BitfieldsModule,
		ChangelogModule,
		DocsModule,
		GeneralModule,
		TagsModule
	],
	providers: [
		AppService,
		{
			provide: APP_FILTER,
			useClass: NecordSentryExceptionFilter
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: CommandMetricsInterceptor
		}
	]
})
export class AppModule {}
