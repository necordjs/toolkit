import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Algolia } from '../interfaces';
import { API_BASE_ALGOLIA } from '../../app.constants';
import { stringify } from 'node:querystring';
import { map } from 'rxjs';
import { AlgoliaApps } from '../enums';

@Injectable()
export class AlgoliaService {
	public static readonly ALGOLIA_APPS: Record<AlgoliaApps, Algolia.App> = {
		[AlgoliaApps.Necord]: {
			appId: 'U7YH0EPYI9',
			apiKey: 'c41976c1ed280e75acc3e9efd4aaaf00',
			index: 'necord'
		},

		[AlgoliaApps.NestJS]: {
			appId: 'SDCBYAN96J',
			apiKey: '6d1869890dab96592b191e63a8deb5b5',
			index: 'nestjs'
		},

		[AlgoliaApps.TypeScript]: {
			appId: 'BGCDYOIYZ5',
			apiKey: '37ee06fa68db6aef451a490df6df7c60',
			index: 'typescriptlang'
		},

		[AlgoliaApps.Discord]: {
			appId: '7TYOYF10Z2',
			apiKey: '786517d17e19e9d306758dd276bc6574',
			index: 'discord'
		},

		[AlgoliaApps.DiscordJSGuide]: {
			appId: '8XSLZMKC5R',
			apiKey: 'a2edfe9f29fe917013b23d5767ae569a',
			index: 'discordjs'
		},

		[AlgoliaApps.Ogma]: {
			appId: 'U5N45YQUS6',
			apiKey: 'dad79a1521426f184d0fac2ce3575149',
			index: 'ogma'
		},

		[AlgoliaApps.NestCommander]: {
			appId: '9O0K4CXI15',
			apiKey: '9689faf6550ca3133e69be1d9861ea92',
			index: 'nest-commander'
		}
	};

	public constructor(private readonly httpService: HttpService) {}

	public async search(query: string, appType: AlgoliaApps): Promise<Algolia.Search.Response> {
		const app = AlgoliaService.ALGOLIA_APPS[appType];
		const url = `https://${app.appId}.${API_BASE_ALGOLIA}/1/indexes/${app.index}/query`;
		return this.httpService
			.post(
				url,
				{
					params: stringify({
						query
					})
				},
				{
					headers: {
						'X-Algolia-API-Key': app.apiKey,
						'X-Algolia-Application-Id': app.appId,
						'Content-Type': 'application/json'
					}
				}
			)
			.pipe(map(response => response.data))
			.toPromise();
	}

	public async getObject(objectID: string, appType: AlgoliaApps): Promise<Algolia.Hit> {
		const app = AlgoliaService.ALGOLIA_APPS[appType];
		const url = `https://${app.appId}.${API_BASE_ALGOLIA}/1/indexes/${
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
}
