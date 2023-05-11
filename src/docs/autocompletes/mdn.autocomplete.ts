import { Inject, Injectable } from '@nestjs/common';
import { AutocompleteInterceptor } from 'necord';
import { AutocompleteInteraction } from 'discord.js';
import { MDNService } from '../services';

@Injectable()
export class MDNAutocomplete extends AutocompleteInterceptor {
	@Inject()
	public readonly mdnService: MDNService;

	public async transformOptions(interaction: AutocompleteInteraction): Promise<void> {
		const focused = interaction.options.getFocused(true);
		const query = focused.value;

		if (focused.name !== 'query') return interaction.respond([]);

		const entries = this.mdnService.search(query);

		return interaction.respond(
			entries
				.map(entry => ({
					name: entry.title,
					value: entry.url
				}))
				.filter(entry => entry.value.length <= 100)
				.slice(0, 24)
		);
	}
}
