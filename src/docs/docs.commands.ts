import { UseInterceptors } from '@nestjs/common';
import {
	Context,
	createCommandGroupDecorator,
	Options,
	SlashCommandContext,
	Subcommand
} from 'necord';
import { AlgoliaAutocomplete, MDNAutocomplete } from './autocompletes';
import { AlgoliaApps } from './enums';
import { SearchOptions } from './options';
import { DocsService } from './docs.service';
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
import { escape, truncate } from './utils';
import { AlgoliaService, MDNService } from './services';

const DocsCommand = createCommandGroupDecorator({
	name: 'docs',
	description: 'Documentation commands'
});

@DocsCommand()
export class DocsCommands {
	public constructor(
		private readonly docsService: DocsService,
		private readonly mdnService: MDNService
	) {}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Necord))
	@Subcommand({ name: 'necord', description: 'Display docs for Necord' })
	public async necord(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.replyWithAlgoliaResponse(interaction, searchOptions, AlgoliaApps.Necord);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.NestJS))
	@Subcommand({ name: 'nestjs', description: 'Display docs for NestJS' })
	public async nestjs(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.replyWithAlgoliaResponse(interaction, searchOptions, AlgoliaApps.NestJS);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.DiscordJSGuide))
	@Subcommand({ name: 'discordjs-guide', description: 'Display docs for Discord.JS Guide' })
	public async discordjsGuide(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.replyWithAlgoliaResponse(
			interaction,
			searchOptions,
			AlgoliaApps.DiscordJSGuide
		);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Discord))
	@Subcommand({ name: 'discord', description: 'Display docs for Discord' })
	public async discord(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.replyWithAlgoliaResponse(interaction, searchOptions, AlgoliaApps.Discord);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.TypeScript))
	@Subcommand({ name: 'typescript', description: 'Display docs for TypeScript' })
	public async typescript(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.replyWithAlgoliaResponse(interaction, searchOptions, AlgoliaApps.TypeScript);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.NestCommander))
	@Subcommand({ name: 'nest-commander', description: 'Display docs for Nest Commander' })
	public async nestCommander(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.replyWithAlgoliaResponse(interaction, searchOptions, AlgoliaApps.NestCommander);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Ogma))
	@Subcommand({ name: 'ogma', description: 'Display docs for Ogma' })
	public async ogma(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.replyWithAlgoliaResponse(interaction, searchOptions, AlgoliaApps.Ogma);
	}

	@UseInterceptors(MDNAutocomplete)
	@Subcommand({ name: 'mdn', description: 'Display docs for MDN' })
	public async mdn(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		const hit = await this.mdnService.get(searchOptions.query.trim());

		if (!hit) {
			return interaction.reply({
				content: `Invalid result. Make sure to select an entry from the autocomplete.`,
				ephemeral: true
			});
		}

		const url = MDNService.API_BASE_MDN + hit.mdn_url;

		const linkReplaceRegex = /\[(.+?)\]\((.+?)\)/g;
		const boldCodeBlockRegex = /`\*\*(.*)\*\*`/g;
		const intro = escape(hit.summary)
			.replace(/\s+/g, ' ')
			.replace(
				linkReplaceRegex,
				hyperlink('$1', hideLinkEmbed(`${MDNService.API_BASE_MDN}$2`))
			)
			.replace(boldCodeBlockRegex, bold(inlineCode('$1')));

		const parts = [
			`<:mdn:1106294471240466525> \ ${underscore(
				bold(hyperlink(escape(hit.title), hideLinkEmbed(url)))
			)}`,
			intro
		];

		if (searchOptions.member) {
			parts.unshift(`\n\n${italic(`Suggestion for ${searchOptions.member}:`)}`);
		}

		const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
			new ButtonBuilder()
				.setEmoji('📖')
				.setLabel('Read more')
				.setURL(url)
				.setStyle(ButtonStyle.Link)
		);

		return interaction.reply({
			content: parts.join('\n'),
			components: [row],
			ephemeral: searchOptions.hide
		});
	}

	private async replyWithAlgoliaResponse(
		interaction: ChatInputCommandInteraction,
		searchOptions: SearchOptions,
		appType: AlgoliaApps
	) {
		const response = await this.docsService.getAlgoliaResponse(searchOptions.query, appType);

		if (!response) {
			return interaction.reply({
				content: `Invalid result. Make sure to select an entry from the autocomplete.`,
				ephemeral: true
			});
		}

		const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
			new ButtonBuilder()
				.setEmoji('📖')
				.setLabel('Read more')
				.setURL(response.url)
				.setStyle(ButtonStyle.Link)
		);

		const notices = [];

		if (searchOptions.member) {
			notices.push(italic(`Suggestion for ${searchOptions.member.toString()}:`));
		}

		notices.push(`${AlgoliaService.ALGOLIA_APPS_EMOJIS[appType]} ${bold(response.title)}`);

		if (response.description) {
			notices.push(truncate(response.description, 300));
		}

		return interaction.reply({
			content: notices.join('\n'),
			components: [row],
			ephemeral: searchOptions.hide
		});
	}
}
