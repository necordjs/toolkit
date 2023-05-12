import { Injectable, UseInterceptors } from '@nestjs/common';
import { Context, Options, SlashCommand, SlashCommandContext } from 'necord';
import { AlgoliaAutocomplete, DiscordJSAutocomplete, MDNAutocomplete } from './autocompletes';
import { AlgoliaApps } from './enums';
import { DiscordJSSearchOptions, SearchOptions } from './options';
import { DocsService } from './docs.service';
import { ButtonStyle } from 'discord.js';

const DOC_DESCRIPTION = (app: string) => `📖 Display docs for ${app}`;

@Injectable()
export class DocsCommands {
	public constructor(private readonly docsService: DocsService) {}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Necord))
	@SlashCommand({ name: 'necord', description: DOC_DESCRIPTION('Necord') })
	public async necord(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Necord);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.NestJS))
	@SlashCommand({ name: 'nestjs', description: DOC_DESCRIPTION('NestJS') })
	public async nestjs(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.NestJS);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Discord))
	@SlashCommand({ name: 'discord', description: DOC_DESCRIPTION('Discord') })
	public async discord(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Discord);
	}

	@UseInterceptors(DiscordJSAutocomplete)
	@SlashCommand({ name: 'discordjs', description: DOC_DESCRIPTION('Discord.js') })
	public async discordjs(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: DiscordJSSearchOptions
	) {
		return this.docsService.replyDiscordJS(interaction, searchOptions);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.DiscordJSGuide))
	@SlashCommand({ name: 'discordjs-guide', description: DOC_DESCRIPTION('Discord.js Guide') })
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

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.TypeScript))
	@SlashCommand({ name: 'typescript', description: DOC_DESCRIPTION('TypeScript') })
	public async typescript(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.TypeScript);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.NestCommander))
	@SlashCommand({ name: 'nest-commander', description: DOC_DESCRIPTION('Nest Commander') })
	public async nestCommander(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.NestCommander);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Ogma))
	@SlashCommand({ name: 'ogma', description: DOC_DESCRIPTION('Ogma') })
	public async ogma(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Ogma);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Express))
	@SlashCommand({ name: 'express', description: DOC_DESCRIPTION('Express') })
	public async express(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Express);
	}

	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Fastify))
	@SlashCommand({ name: 'fastify', description: DOC_DESCRIPTION('Fastify') })
	public async fastify(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Fastify);
	}

	@UseInterceptors(MDNAutocomplete)
	@SlashCommand({ name: 'mdn', description: DOC_DESCRIPTION('MDN') })
	public async mdn(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	) {
		return this.docsService.replyMDN(interaction, searchOptions);
	}
}
