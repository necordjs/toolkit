import { UseInterceptors } from '@nestjs/common';
import {
	Context,
	createCommandGroupDecorator,
	Options,
	SlashCommandContext,
	Subcommand
} from 'necord';
import { AlgoliaAutocomplete } from './autocompletes';
import { AlgoliaApps } from './enums';
import { AlgoliaOptions } from './options/algolia.options';
import { DocsService } from './docs.service';

const DocsCommand = createCommandGroupDecorator({
	name: 'docs',
	description: 'Documentation commands'
});

@DocsCommand()
export class DocsCommands {
	public constructor(private readonly docsService: DocsService) {}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Necord))
	@Subcommand({ name: 'necord', description: 'Display docs for Necord' })
	public async necord(
		@Context() [interaction]: SlashCommandContext,
		@Options() algoliaOptions: AlgoliaOptions
	) {
		const content = await this.docsService.getAlgoliaResponse(
			algoliaOptions.query,
			'Necord',
			AlgoliaApps.Necord
		);

		return interaction.reply({
			content
		});
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.NestJS))
	@Subcommand({ name: 'nestjs', description: 'Display docs for NestJS' })
	public async nestjs(
		@Context() [interaction]: SlashCommandContext,
		@Options() algoliaOptions: AlgoliaOptions
	) {
		const content = await this.docsService.getAlgoliaResponse(
			algoliaOptions.query,
			'NestJS',
			AlgoliaApps.NestJS
		);

		return interaction.reply({
			content
		});
	}
}
