import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AlgoliaApp, AlgoliaHit, AlgoliaSearchResult } from '../interfaces';
import { API_BASE_ALGOLIA } from '../../app.constants';
import { stringify } from 'node:querystring';
import { map } from 'rxjs';
import { AlgoliaApps } from '../enums';

@Injectable()
export class AlgoliaService {
	public static readonly ALGOLIA_APPS: Record<AlgoliaApps, AlgoliaApp> = {
		[AlgoliaApps.Necord]: {
			appId: 'U7YH0EPYI9',
			apiKey: 'c41976c1ed280e75acc3e9efd4aaaf00',
			index: 'necord'
		},

		[AlgoliaApps.NestJS]: {
			appId: 'SDCBYAN96J',
			apiKey: '6d1869890dab96592b191e63a8deb5b5',
			index: 'nestjs'
		}
	};

	public constructor(private readonly httpService: HttpService) {}

	public async search(query: string, appType: AlgoliaApps): Promise<AlgoliaSearchResult> {
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

	public async getObject(objectID: string, appType: AlgoliaApps): Promise<AlgoliaHit> {
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
