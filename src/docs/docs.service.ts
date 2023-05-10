import { Injectable } from '@nestjs/common';
import { AlgoliaService } from './services';
import { AlgoliaApps } from './enums';
import { bold, hideLinkEmbed, hyperlink } from 'discord.js';
import { resolveHitToName, truncate } from './utils';

@Injectable()
export class DocsService {
	public constructor(private readonly algoliaService: AlgoliaService) {}

	public async getAlgoliaResponse(objectID: string, target: string, appType: AlgoliaApps) {
		try {
			const hit = await this.algoliaService.getObject(objectID, appType);
			console.log(hit);

			return `${bold(`[${appType}] ${resolveHitToName(hit)}`)}${
				hit.content?.length ? `\n${truncate(hit.content, 300)}` : ''
			}\n${hyperlink('Read more', hideLinkEmbed(hit.url))}`;
		} catch (err) {
			return `Invalid result. Make sure to select an entry from the autocomplete.`;
		}
	}
}
