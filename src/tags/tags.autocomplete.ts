import { AutocompleteInterceptor } from 'necord';
import { ApplicationCommandOptionChoiceData, AutocompleteInteraction } from 'discord.js';
import { Tags } from './tags.constants';

export class TagsAutocomplete extends AutocompleteInterceptor {
	public transformOptions(interaction: AutocompleteInteraction): Promise<void> {
		const focused = interaction.options.getFocused(true);
		const query = focused.value;

		if (focused.name !== 'query') return interaction.respond([]);

		const results: ApplicationCommandOptionChoiceData[] = [];

		if (query.length < 1) {
			const hoistedTags = Object.entries(Tags)
				.filter(([key, value]) => value.hoisted)
				.map(([key, value]) => ({
					name: `📌 ${key}`,
					value: key
				}));

			results.push(...hoistedTags);
		} else {
			const keywordMatches: ApplicationCommandOptionChoiceData[] = [];
			const contentMatches: ApplicationCommandOptionChoiceData[] = [];
			const exactKeywords: ApplicationCommandOptionChoiceData[] = [];
			const cleanedQuery = query.toLowerCase().replace(/\s+/g, '-');
			for (const [key, tag] of Object.entries(Tags)) {
				const exactKeyword = tag.keywords.find(s => s.toLowerCase() === cleanedQuery);
				const includesKeyword = tag.keywords.find(s =>
					s.toLowerCase().includes(cleanedQuery)
				);
				const isContentMatch = tag.content.toLowerCase().includes(cleanedQuery);
				if (exactKeyword) {
					exactKeywords.push({
						name: `✅ ${key}`,
						value: key
					});
				} else if (includesKeyword) {
					keywordMatches.push({
						name: `🔑 ${key}`,
						value: key
					});
				} else if (isContentMatch) {
					contentMatches.push({
						name: `📄 ${key}`,
						value: key
					});
				}
			}
			results.push(...exactKeywords, ...keywordMatches, ...contentMatches);
		}

		return interaction.respond(results.slice(0, 24));
	}
}
