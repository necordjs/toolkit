import { SearchOptions } from './search.options';
import { StringOption } from 'necord';
import { SourcesStringUnion } from 'discordjs-docs-parser';

export class DiscordJSSearchOptions extends SearchOptions {
	@StringOption({
		name: 'source',
		description: 'The source to search in',
		required: true,
		autocomplete: true
	})
	public source: SourcesStringUnion;
}
