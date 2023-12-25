import { Module, OnModuleInit } from '@nestjs/common';
import { NecordModule } from 'necord';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DocsModule } from './docs/docs.module';
import { BitfieldsModule } from './bitfields/bitfields.module';
import { GeneralModule } from './general/general.module';
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import { ChangelogModule } from './changelog/changelog.module';
import { metrics } from '@opentelemetry/api';
import { setupNodeMetrics } from '@sesamecare-oss/opentelemetry-node-metrics';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
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
	providers: [AppService]
})
export class AppModule implements OnModuleInit {
	public onModuleInit(): any {
		const meterProvider = metrics.getMeterProvider();
		const meter = meterProvider.getMeter('node-metrics');
		setupNodeMetrics(meter);
	}
}
