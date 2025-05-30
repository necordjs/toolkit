import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DocsModule } from './docs/docs.module';
import { BitfieldsModule } from './bitfields/bitfields.module';
import { GeneralModule } from './general/general.module';
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import { ChangelogModule } from './changelog/changelog.module';
import { SentryModule } from '@sentry/nestjs/setup';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { CommandMetricsInterceptor, NecordSentryExceptionFilter } from './common';
import { OpenTelemetryModule } from 'nestjs-otel';

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
				token: configService.get('DISCORD_TOKEN'),
				prefix: '!',
				intents: ['Guilds', 'GuildMembers', 'MessageContent'],
				development:
					configService.get('NODE_ENV', 'development') === 'development'
						? [configService.get('DISCORD_TEST_GUILD')]
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
