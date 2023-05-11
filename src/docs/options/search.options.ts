import { BooleanOption, MemberOption, StringOption } from 'necord';
import { GuildMember } from 'discord.js';

export class SearchOptions {
	@StringOption({
		name: 'query',
		description: 'The query to search for',
		required: true,
		autocomplete: true
	})
	public query!: string;

	@BooleanOption({ name: 'hide', description: 'Hide command output', required: false })
	public hide?: boolean;

	@MemberOption({ name: 'target', description: 'User to mention', required: false })
	public member?: GuildMember;
}
