import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Algolia } from '../interfaces';
import { catchError, map } from 'rxjs';
import { AlgoliaApps } from '../enums';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AlgoliaService {
	private static readonly API_BASE_ALGOLIA = 'algolia.net';

	public constructor(
		private readonly httpService: HttpService,
		private readonly configService: ConfigService
	) {}

	public get algoliaApps(): Record<AlgoliaApps, Algolia.App> {
		return {
			[AlgoliaApps.Necord]: {
				appId: this.configService.getOrThrow<string>('ALGOLIA_NECORD_APP_ID'),
				apiKey: this.configService.getOrThrow<string>('ALGOLIA_NECORD_API_KEY'),
				index: 'necord'
			},
			[AlgoliaApps.NestJS]: {
				appId: this.configService.getOrThrow<string>('ALGOLIA_NESTJS_APP_ID'),
				apiKey: this.configService.getOrThrow<string>('ALGOLIA_NESTJS_API_KEY'),
				index: 'nestjs'
			},
			[AlgoliaApps.TypeScript]: {
				appId: this.configService.getOrThrow<string>('ALGOLIA_TYPESCRIPT_APP_ID'),
				apiKey: this.configService.getOrThrow<string>('ALGOLIA_TYPESCRIPT_API_KEY'),
				index: 'typescriptlang'
			},
			[AlgoliaApps.Discord]: {
				appId: this.configService.getOrThrow<string>('ALGOLIA_DISCORD_APP_ID'),
				apiKey: this.configService.getOrThrow<string>('ALGOLIA_DISCORD_API_KEY'),
				index: 'discord'
			},
			[AlgoliaApps.DiscordJSGuide]: {
				appId: this.configService.getOrThrow<string>('ALGOLIA_DISCORDJS_APP_ID'),
				apiKey: this.configService.getOrThrow<string>('ALGOLIA_DISCORDJS_API_KEY'),
				index: 'discordjs'
			},
			[AlgoliaApps.Ogma]: {
				appId: this.configService.getOrThrow<string>('ALGOLIA_OGMA_APP_ID'),
				apiKey: this.configService.getOrThrow<string>('ALGOLIA_OGMA_API_KEY'),
				index: 'ogma'
			},
			[AlgoliaApps.NestCommander]: {
				appId: this.configService.getOrThrow<string>('ALGOLIA_NESTCOMMANDER_APP_ID'),
				apiKey: this.configService.getOrThrow<string>('ALGOLIA_NESTCOMMANDER_API_KEY'),
				index: 'nest-commander'
			},
			[AlgoliaApps.Express]: {
				appId: this.configService.getOrThrow<string>('ALGOLIA_EXPRESS_APP_ID'),
				apiKey: this.configService.getOrThrow<string>('ALGOLIA_EXPRESS_API_KEY'),
				index: 'expressjs'
			},
			[AlgoliaApps.Fastify]: {
				appId: this.configService.getOrThrow<string>('ALGOLIA_FASTIFY_APP_ID'),
				apiKey: this.configService.getOrThrow<string>('ALGOLIA_FASTIFY_API_KEY'),
				index: 'fastify'
			}
		};
	}

	public async search(query: string, appType: AlgoliaApps): Promise<Algolia.Search.Response> {
		const app = this.algoliaApps[appType];
		const url = `https://${app.appId}.${AlgoliaService.API_BASE_ALGOLIA}/1/indexes/${app.index}/query`;

		return this.httpService
			.post(
				url,
				{
					params: new URLSearchParams({
						query,
						facetFilters: JSON.stringify(['lang:en'])
					}).toString()
				},
				{
					headers: {
						'X-Algolia-API-Key': app.apiKey,
						'X-Algolia-Application-Id': app.appId,
						'Content-Type': 'application/json'
					}
				}
			)
			.pipe(
				map(response => response.data),
				catchError(() => [])
			)
			.toPromise();
	}

	public async getObject(objectID: string, appType: AlgoliaApps): Promise<Algolia.Hit> {
		const app = this.algoliaApps[appType];
		const url = `https://${app.appId}.${AlgoliaService.API_BASE_ALGOLIA}/1/indexes/${
			app.index
		}/${encodeURIComponent(objectID)}`;
		return this.httpService
			.get(url, {
				headers: {
					'X-Algolia-API-Key': app.apiKey,
					'X-Algolia-Application-Id': app.appId,
					'Content-Type': 'application/json'
				}
			})
			.pipe(map(response => response.data))
			.toPromise();
	}

	public getAlgoliaAppEmoji(appType: AlgoliaApps): string {
		switch (appType) {
			case AlgoliaApps.Necord:
				return '<:necord:983768394757193851>';
			case AlgoliaApps.NestJS:
				return '<:nestjs:1106290667438755990>';
			case AlgoliaApps.TypeScript:
				return '<:typescript:1106290484982325249>';
			case AlgoliaApps.Discord:
				return '<:discord:1106291735488909453>';
			case AlgoliaApps.DiscordJSGuide:
				return '<:discordjs:1106292175634972672>';
			case AlgoliaApps.Ogma:
				return '<:ogma:1106291049573384293>';
			case AlgoliaApps.NestCommander:
				return '<:commander:1106291617343754334>';
			case AlgoliaApps.Express:
				return '<:express:1106556588153647174>';
			case AlgoliaApps.Fastify:
				return '<:fastify:1106556585699983381>';
			default:
				return '';
		}
	}
}
