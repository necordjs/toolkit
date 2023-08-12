import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DocsModule } from './docs/docs.module';
import { BitfieldsModule } from './bitfields/bitfields.module';
import { GeneralModule } from './general/general.module';
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import { ChangelogModule } from './changelog/changelog.module';

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
						? ['742715858157043793', '977861813658075146']
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
export class AppModule {}
