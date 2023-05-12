import { AutocompleteInterceptor } from 'necord';
import { Inject, Injectable } from '@nestjs/common';
import { AutocompleteInteraction } from 'discord.js';
import { sources, SourcesStringUnion } from 'discordjs-docs-parser';
import { DiscordJSService } from '../services';

@Injectable()
export class DiscordJSAutocomplete extends AutocompleteInterceptor {
	@Inject()
	private readonly discordJSService: DiscordJSService;

	public async transformOptions(interaction: AutocompleteInteraction): Promise<void> {
		const focused = interaction.options.getFocused(true);

		if (['source', 'query'].every(source => source !== focused.name))
			return interaction.respond([]);

		if (focused.name === 'source') {
			return interaction.respond(
				[...sources.keys()].map(source => ({
					name: source,
					value: source
				}))
			);
		}

		if (focused.name === 'query') {
			const source = interaction.options.getString('source', false);

			if (!source || !sources.has(source as SourcesStringUnion))
				return interaction.respond([{ name: 'Please select a source first', value: '' }]);

			const result = await this.discordJSService.search(
				source as SourcesStringUnion,
				focused.value
			);

			return interaction.respond(
				result
					.map(hit => ({ name: hit.formattedName, value: hit.formattedName }))
					.slice(0, 24)
			);
		}

		return interaction.respond([]);
	}
}
