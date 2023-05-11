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
import { AlgoliaOptions } from './options/algolia.options';
import { DocsService } from './docs.service';
import { ChatInputCommandInteraction } from 'discord.js';

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
		@Options() algoliaOptions: AlgoliaOptions
	) {
		return this.replyWithAlgoliaResponse(interaction, algoliaOptions, AlgoliaApps.Necord);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.NestJS))
	@Subcommand({ name: 'nestjs', description: 'Display docs for NestJS' })
	public async nestjs(
		@Context() [interaction]: SlashCommandContext,
		@Options() algoliaOptions: AlgoliaOptions
	) {
		return this.replyWithAlgoliaResponse(interaction, algoliaOptions, AlgoliaApps.NestJS);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.DiscordJSGuide))
	@Subcommand({ name: 'discordjs-guide', description: 'Display docs for Discord.JS Guide' })
	public async discordjsGuide(
		@Context() [interaction]: SlashCommandContext,
		@Options() algoliaOptions: AlgoliaOptions
	) {
		return this.replyWithAlgoliaResponse(
			interaction,
			algoliaOptions,
			AlgoliaApps.DiscordJSGuide
		);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Discord))
	@Subcommand({ name: 'discord', description: 'Display docs for Discord' })
	public async discord(
		@Context() [interaction]: SlashCommandContext,
		@Options() algoliaOptions: AlgoliaOptions
	) {
		return this.replyWithAlgoliaResponse(interaction, algoliaOptions, AlgoliaApps.Discord);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.TypeScript))
	@Subcommand({ name: 'typescript', description: 'Display docs for TypeScript' })
	public async typescript(
		@Context() [interaction]: SlashCommandContext,
		@Options() algoliaOptions: AlgoliaOptions
	) {
		return this.replyWithAlgoliaResponse(interaction, algoliaOptions, AlgoliaApps.TypeScript);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.NestCommander))
	@Subcommand({ name: 'nest-commander', description: 'Display docs for Nest Commander' })
	public async nestCommander(
		@Context() [interaction]: SlashCommandContext,
		@Options() algoliaOptions: AlgoliaOptions
	) {
		return this.replyWithAlgoliaResponse(
			interaction,
			algoliaOptions,
			AlgoliaApps.NestCommander
		);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Ogma))
	@Subcommand({ name: 'ogma', description: 'Display docs for Ogma' })
	public async ogma(
		@Context() [interaction]: SlashCommandContext,
		@Options() algoliaOptions: AlgoliaOptions
	) {
		return this.replyWithAlgoliaResponse(interaction, algoliaOptions, AlgoliaApps.Ogma);
	}

	private async replyWithAlgoliaResponse(
		interaction: ChatInputCommandInteraction,
		algoliaOptions: AlgoliaOptions,
		appType: AlgoliaApps
	) {
		const content = await this.docsService.getAlgoliaResponse(algoliaOptions.query, appType);

		return interaction.reply({
			content,
			ephemeral: algoliaOptions.hide
		});
	}
}
