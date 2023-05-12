import { Injectable } from '@nestjs/common';
import { AlgoliaService, DiscordJSService, MDNService } from './services';
import { AlgoliaApps } from './enums';
import { escape, truncate } from './utils';
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
	MessageFlags,
	underscore
} from 'discord.js';
import { DiscordJSSearchOptions, SearchOptions } from './options';
import { Algolia, DiscordJS, DocsOptions } from './interfaces';
import { SourcesStringUnion } from 'discordjs-docs-parser';

@Injectable()
export class DocsService {
	public constructor(
		private readonly algoliaService: AlgoliaService,
		private readonly mdnService: MDNService,
		private readonly discordJSService: DiscordJSService
	) {}

	public async getAlgoliaResponse(objectID: string, appType: AlgoliaApps): Promise<DocsOptions> {
		try {
			const hit = await this.algoliaService.getObject(objectID, appType);

			return {
				title: bold(Algolia.Hit.getFormattedHierarchy(hit)),
				description: hit.content?.length ? hit.content : null,
				url: hit.url
			};
		} catch (err) {
			return null;
		}
	}

	public async getMDNResponse(query: string): Promise<DocsOptions> {
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

	private async getDiscordJSResponse(source: string, query: string): Promise<DocsOptions> {
		try {
			const [element, doc] = await this.discordJSService.get(
				source as SourcesStringUnion,
				query
			);

			const description = (element.formattedDescription || element.description) ?? '';

			return {
				title: DiscordJS.resolveElementString(element, doc),
				description,
				url: element.url
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

		if (!response) {
			return this.replyInvalid(interaction);
		}

		return this.reply(interaction, searchOptions, {
			...response,
			emoji: this.algoliaService.getAlgoliaAppEmoji(appType)
		});
	}

	public async replyMDN(interaction: ChatInputCommandInteraction, searchOptions: SearchOptions) {
		const response = await this.getMDNResponse(searchOptions.query);

		if (!response) {
			return this.replyInvalid(interaction);
		}

		return this.reply(interaction, searchOptions, {
			...response,
			emoji: '<:mdn:1106294471240466525>'
		});
	}

	public async replyDiscordJS(
		interaction: ChatInputCommandInteraction,
		searchOptions: DiscordJSSearchOptions
	) {
		const response = await this.getDiscordJSResponse(searchOptions.source, searchOptions.query);

		if (!response) {
			return this.replyInvalid(interaction);
		}

		return this.reply(interaction, searchOptions, {
			...response,
			emoji: '<:discordjs:1106292175634972672>'
		});
	}

	public async reply(
		interaction: ChatInputCommandInteraction,
		searchOptions: SearchOptions,
		options: DocsOptions
	) {
		if (!options) {
			return this.replyInvalid(interaction);
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
			ephemeral: searchOptions.hide,
			flags: MessageFlags.SuppressEmbeds
		});
	}

	public replyInvalid(interaction: ChatInputCommandInteraction) {
		return interaction.reply({
			content: `Invalid result. Make sure to select an entry from the autocomplete.`,
			ephemeral: true
		});
	}
}
