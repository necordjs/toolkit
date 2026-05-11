import { SourcesStringUnion } from 'discordjs-docs-parser';
import { StringOption } from 'necord';

import { SearchOptions } from './search.options';

export class DiscordJSSearchOptions extends SearchOptions {
	@StringOption({
		name: 'source',
		description: 'The source to search in',
		required: true,
		autocomplete: true
	})
	public source: SourcesStringUnion;
}
