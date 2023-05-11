import { UseInterceptors } from '@nestjs/common';
import {
	Context,
	createCommandGroupDecorator,
	Options,
	SlashCommandContext,
	Subcommand
} from 'necord';
import { AlgoliaAutocomplete } from './autocompletes';
import { AlgoliaApps } from './enums';
import { SearchOptions } from './options';
import { DocsService } from './docs.service';
import {
	ActionRowBuilder,
	bold,
	ButtonBuilder,
	ButtonStyle,
	ChatInputCommandInteraction,
	italic
} from 'discord.js';
import { truncate } from './utils';
import { AlgoliaService } from './services';

const DocsCommand = createCommandGroupDecorator({
	name: 'docs',
	description: 'Documentation commands'
});

@DocsCommand()
export class DocsCommands {
	public constructor(private readonly docsService: DocsService) {}

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
