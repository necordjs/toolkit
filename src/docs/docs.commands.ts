import { Context, Options, SlashCommand, SlashCommandContext } from 'necord';
import { Injectable, UseInterceptors } from '@nestjs/common';

import { AlgoliaAutocomplete, DiscordJSAutocomplete, MDNAutocomplete } from './autocompletes';
import { DiscordJSSearchOptions, SearchOptions } from './options';
import { DocsService } from './docs.service';
import { AlgoliaApps } from './enums';

const DOC_DESCRIPTION = (app: string) => `📖 Display docs for ${app}`;

@Injectable()
export class DocsCommands {
	public constructor(private readonly docsService: DocsService) {}

	@SlashCommand({ name: 'necord', description: DOC_DESCRIPTION('Necord') })
	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Necord))
	public async necord(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	): Promise<unknown> {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Necord);
	}

	@SlashCommand({ name: 'nestjs', description: DOC_DESCRIPTION('NestJS') })
	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.NestJS))
	public async nestjs(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	): Promise<unknown> {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.NestJS);
	}

	@SlashCommand({ name: 'discord', description: DOC_DESCRIPTION('Discord') })
	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Discord))
	public async discord(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	): Promise<unknown> {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Discord);
	}

	@SlashCommand({ name: 'discordjs', description: DOC_DESCRIPTION('Discord.js') })
	@UseInterceptors(DiscordJSAutocomplete)
	public async discordjs(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: DiscordJSSearchOptions
	): Promise<unknown> {
		return this.docsService.replyDiscordJS(interaction, searchOptions);
	}

	@SlashCommand({ name: 'discordjs-guide', description: DOC_DESCRIPTION('Discord.js Guide') })
	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.DiscordJSGuide))
	public async discordjsGuide(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	): Promise<unknown> {
		return this.docsService.replyAlgolia(
			interaction,
			searchOptions,
			AlgoliaApps.DiscordJSGuide
		);
	}

	@SlashCommand({ name: 'typescript', description: DOC_DESCRIPTION('TypeScript') })
	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.TypeScript))
	public async typescript(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	): Promise<unknown> {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.TypeScript);
	}

	@SlashCommand({ name: 'nest-commander', description: DOC_DESCRIPTION('Nest Commander') })
	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.NestCommander))
	public async nestCommander(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	): Promise<unknown> {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.NestCommander);
	}

	@SlashCommand({ name: 'ogma', description: DOC_DESCRIPTION('Ogma') })
	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Ogma))
	public async ogma(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	): Promise<unknown> {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Ogma);
	}

	@SlashCommand({ name: 'express', description: DOC_DESCRIPTION('Express') })
	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Express))
	public async express(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	): Promise<unknown> {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Express);
	}

	@SlashCommand({ name: 'fastify', description: DOC_DESCRIPTION('Fastify') })
	@UseInterceptors(AlgoliaAutocomplete(AlgoliaApps.Fastify))
	public async fastify(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	): Promise<unknown> {
		return this.docsService.replyAlgolia(interaction, searchOptions, AlgoliaApps.Fastify);
	}

	@SlashCommand({ name: 'mdn', description: DOC_DESCRIPTION('MDN') })
	@UseInterceptors(MDNAutocomplete)
	public async mdn(
		@Context() [interaction]: SlashCommandContext,
		@Options() searchOptions: SearchOptions
	): Promise<unknown> {
		return this.docsService.replyMDN(interaction, searchOptions);
	}
}
