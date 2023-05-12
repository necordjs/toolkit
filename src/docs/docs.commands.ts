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
import { ButtonStyle } from 'discord.js';

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
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Necord);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.NestJS))
	@Subcommand({ name: 'nestjs', description: 'Display docs for NestJS' })
	public async nestjs(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.NestJS);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.DiscordJSGuide))
	@Subcommand({ name: 'discordjs-guide', description: 'Display docs for Discord.JS Guide' })
	public async discordjsGuide(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(
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
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Discord);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.TypeScript))
	@Subcommand({ name: 'typescript', description: 'Display docs for TypeScript' })
	public async typescript(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.TypeScript);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.NestCommander))
	@Subcommand({ name: 'nest-commander', description: 'Display docs for Nest Commander' })
	public async nestCommander(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.NestCommander);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Ogma))
	@Subcommand({ name: 'ogma', description: 'Display docs for Ogma' })
	public async ogma(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Ogma);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Express))
	@Subcommand({ name: 'express', description: 'Display docs for Express' })
	public async express(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Express);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Fastify))
	@Subcommand({ name: 'fastify', description: 'Display docs for Fastify' })
	public async fastify(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Fastify);
	}

	@UseInterceptors(MDNAutocomplete)
	@Subcommand({ name: 'mdn', description: 'Display docs for MDN' })
	public async mdn(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyMDN(interaction, searchOptions);
	}
}
