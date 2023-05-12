import { Injectable } from '@nestjs/common';
import { AlgoliaService, MDNService } from './services';
import { AlgoliaApps } from './enums';
import { escape, resolveHitToName, truncate } from './utils';
import {
	ActionRowBuilder,
	bold,
	ButtonBuilder,
	ButtonStyle,
	ChatInputCommandInteraction,
	hideLinkEmbed,
	hyperlink,
	inlineCode,
	italic,
	underscore
} from 'discord.js';
import { SearchOptions } from './options';
import { DocsOptions } from './interfaces/docs-options.interface';

@Injectable()
export class DocsService {
	public constructor(
		private readonly algoliaService: AlgoliaService,
		private readonly mdnService: MDNService
	) {}

	public async getAlgoliaResponse(objectID: string, appType: AlgoliaApps) {
		try {
			const hit = await this.algoliaService.getObject(objectID, appType);

			return {
				title: bold(resolveHitToName(hit)),
				description: hit.content?.length ? hit.content : null,
				url: hit.url
			};
		} catch (err) {
			return null;
		}
	}

	public async getMDNResponse(query: string) {
		try {
			const hit = await this.mdnService.get(query);

			const linkReplaceRegex = /\[(.+?)\]\((.+?)\)/g;
			const boldCodeBlockRegex = /`\*\*(.*)\*\*`/g;
			const description = escape(hit.summary)
				.replace(/\s+/g, ' ')
				.replace(
					linkReplaceRegex,
					hyperlink('$1', hideLinkEmbed(`${MDNService.API_BASE_MDN}$2`))
				)
				.replace(boldCodeBlockRegex, bold(inlineCode('$1')));

			const url = MDNService.API_BASE_MDN + hit.mdn_url;

			return {
				title: underscore(bold(hyperlink(escape(hit.title), hideLinkEmbed(url)))),
				description,
				url
			};
		} catch (err) {
			return null;
		}
	}

	public async replyAlgolia(
		interaction: ChatInputCommandInteraction,
		searchOptions: SearchOptions,
		appType: AlgoliaApps
	) {
		const response = await this.getAlgoliaResponse(searchOptions.query, appType);

		return this.reply(interaction, searchOptions, {
			...response,
			emoji: AlgoliaService.ALGOLIA_APPS_EMOJIS[appType]
		});
	}

	public async replyMDN(interaction: ChatInputCommandInteraction, searchOptions: SearchOptions) {
		const response = await this.getMDNResponse(searchOptions.query);

		return this.reply(interaction, searchOptions, {
			...response,
			emoji: '<:mdn:1106294471240466525>'
		});
	}

	public async reply(
		interaction: ChatInputCommandInteraction,
		searchOptions: SearchOptions,
		options: DocsOptions
	) {
		if (!options) {
			return interaction.reply({
				content: `Invalid result. Make sure to select an entry from the autocomplete.`,
				ephemeral: true
			});
		}

		const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
			new ButtonBuilder()
				.setEmoji('📖')
				.setLabel('Read more')
				.setURL(options.url)
				.setStyle(ButtonStyle.Link)
		);

		const notices = [];

		if (searchOptions.member) {
			notices.push(italic(`Suggestion for ${searchOptions.member.toString()}:`));
		}

		notices.push(`${options.emoji} ${options.title}`);

		if (options.description) {
			notices.push(truncate(options.description, 300));
		}

		return interaction.reply({
			content: notices.join('\n'),
			components: [row],
			ephemeral: searchOptions.hide
		});
	}
}
