import { Module } from '@nestjs/common';
import { AlgoliaService, MDNService } from './services';
import { HttpModule } from '@nestjs/axios';
import { DocsCommands } from './docs.commands';
import { DocsService } from './docs.service';

@Module({
	imports: [
		HttpModule.register({
			timeout: 5000
		})
	],
	providers: [AlgoliaService, DocsService, DocsCommands, MDNService]
})
export class DocsModule {}
