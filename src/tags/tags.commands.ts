import { Context, Options, SlashCommand, SlashCommandContext } from 'necord';
import { Injectable, UseInterceptors } from '@nestjs/common';
import { MessageFlags } from 'discord.js';

import { TagsAutocomplete } from './tags.autocomplete.js';
import { SearchOptions } from '../docs/options/index.js';
import { Tags } from './tags.constants.js';

@Injectable()
export class TagsCommands {
	@SlashCommand({
		name: 'tag',
		description: '📌 Send a tag by name or alias'
	})
	@UseInterceptors(TagsAutocomplete)
	public async tag(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		const query = searchOptions.query.trim().toLowerCase().replace(/\s+/g, '-');
		const match = Object.keys(Tags).find(tag => Tags[tag]?.keywords.includes(query));
		const tag = Tags[query] ?? (match ? Tags[match] : undefined);

		if (!tag) {
			return interaction.reply({
				content: `Tag not found`,
				ephemeral: true
			});
		}

		return interaction.reply({
			content: `${searchOptions.member?.toString() ?? ''}\n${tag.content}`,
			ephemeral: searchOptions.hide,
			flags: MessageFlags.SuppressEmbeds
		});
	}
}
