import { AutocompleteInteraction } from 'discord.js';
import { AutocompleteInterceptor } from 'necord';
import { Inject } from '@nestjs/common';

import { AlgoliaService } from '../services/index.js';
import { Algolia } from '../interfaces/index.js';
import { AlgoliaApps } from '../enums/index.js';
import { truncate } from '../utils/index.js';

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

			const seen = new Set<string>();

			return interaction.respond(
				hits
					.map(hit => {
						const { objectID: value } = hit;
						const name = truncate(Algolia.getFormattedHierarchy(hit), 95, '');

						return {
							name,
							value
						};
					})
					.filter(choice => {
						if (seen.has(choice.name)) return false;

						seen.add(choice.name);

						return true;
					})
			);
		}
	}

	return AlgoliaAutocompleteInterceptor;
}
