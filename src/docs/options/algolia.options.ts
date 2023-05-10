import { StringOption } from 'necord';
import { EphemeralOptions } from './ephemeral.options';

export class AlgoliaOptions extends EphemeralOptions {
	@StringOption({
		name: 'query',
		description: 'The query to search for',
		required: true,
		autocomplete: true
	})
	public query!: string;
}
