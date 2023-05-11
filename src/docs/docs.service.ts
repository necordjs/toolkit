import { Injectable } from '@nestjs/common';
import { AlgoliaService } from './services';
import { AlgoliaApps } from './enums';
import { resolveHitToName } from './utils';

@Injectable()
export class DocsService {
	public constructor(private readonly algoliaService: AlgoliaService) {}

	public async getAlgoliaResponse(objectID: string, appType: AlgoliaApps) {
		try {
			const hit = await this.algoliaService.getObject(objectID, appType);

			return {
				title: resolveHitToName(hit),
				description: hit.content?.length ? hit.content : null,
				url: hit.url
			};
		} catch (err) {
			return null;
		}
	}
}
