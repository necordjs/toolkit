import { Injectable } from '@nestjs/common';
import { Doc, DocElement, DocTypes, SourcesStringUnion } from 'discordjs-docs-parser';

@Injectable()
export class DiscordJSService {
	public async search(source: SourcesStringUnion, query: string) {
		const doc = await this.fetch(source);

		return doc.search(query)?.filter(hit => hit.docType !== DocTypes.Param) ?? [];
	}

	public fetch(source: SourcesStringUnion): Promise<Doc> {
		return Doc.fetch(source);
	}

	public async get(source: SourcesStringUnion, query: string): Promise<[DocElement, Doc]> {
		query = query.trim();

		const doc = await this.fetch(source);
		const element = doc.get(...query.split(/\.|#/));

		if (!element) return null;

		return [element, doc];
	}
}
