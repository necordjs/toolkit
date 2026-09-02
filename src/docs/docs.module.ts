import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { AlgoliaService, DiscordJSService, MDNService } from './services/index.js';
import { DocsCommands } from './docs.commands.js';
import { DocsService } from './docs.service.js';

@Module({
	imports: [
		HttpModule.register({
			timeout: 5000
		})
	],
	providers: [AlgoliaService, DocsService, DocsCommands, MDNService, DiscordJSService]
})
export class DocsModule {}
