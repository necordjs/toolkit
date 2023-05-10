import { AutocompleteInterceptor } from 'necord';
import { AutocompleteInteraction } from 'discord.js';
import { AlgoliaService } from '../services';
import { resolveHitToName, truncate } from '../utils';
import { AlgoliaApps } from '../enums';
import { Inject } from '@nestjs/common';

export function AlgoliaAutocomplete(app: AlgoliaApps) {
	class AlgoliaAutocompleteInterceptor extends AutocompleteInterceptor {
		@Inject()
		public readonly algoliaService: AlgoliaService;

		public async transformOptions(interaction: AutocompleteInteraction): Promise<void> {
			const focused = interaction.options.getFocused(true);
			const query = focused.value;

			if (focused.name !== 'query') return interaction.respond([]);

			const searchResult = await this.algoliaService.search(query, app);
			const hits = searchResult.hits?.slice(0, 24) ?? [];
			const choices = hits.map(hit => {
				const { objectID } = hit;

				return {
					name: truncate(resolveHitToName(hit), 95, ''),
					value: objectID
				};
			});

			return interaction.respond(choices);
		}
	}

	return AlgoliaAutocompleteInterceptor;
}
