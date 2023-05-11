import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DocsModule } from './docs/docs.module';
import { BitfieldsModule } from './bitfields/bitfields.module';
import { GeneralModule } from './general/general.module';
import { AppService } from './app.service';

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
				development: ['742715858157043793', '977861813658075146']
			}),
			inject: [ConfigService]
		}),
		DocsModule,
		BitfieldsModule,
		GeneralModule
	],
	providers: [AppService]
})
export class AppModule {}
