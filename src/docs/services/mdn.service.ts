import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { MDN } from '../interfaces';
import { HttpService } from '@nestjs/axios';
import { catchError, map, tap } from 'rxjs';

@Injectable()
export class MDNService implements OnApplicationBootstrap {
	public static readonly API_BASE_MDN = 'https://developer.mozilla.org';

	private readonly indices: MDN.IndexEntry[] = [];

	private readonly cache = new Map<string, MDN.Document>();

	public constructor(private readonly httpService: HttpService) {}

	public async onApplicationBootstrap() {
		return this.index().then(index =>
			this.indices.push(...index.map(r => ({ title: r.title, url: r.url })))
		);
	}

	public index(): Promise<MDN.IndexEntry[]> {
		return this.httpService
			.get(`${MDNService.API_BASE_MDN}/en-US/search-index.json`)
			.pipe(
				map(response => response.data),
				catchError(() => [])
			)
			.toPromise();
	}

	public search(query: string): MDN.IndexEntry[] {
		const parts = query.split(/\.|#/).map(p => p.toLowerCase());
		const candidates = [];

		for (const entry of this.indices) {
			const lowerTitle = entry.title.toLowerCase();
			const matches = parts.filter(phrase => lowerTitle.includes(phrase));
			if (matches.length) {
				candidates.push({
					entry,
					matches
				});
			}
		}

		return candidates
			.sort((a, b) => {
				if (a.matches.length !== b.matches.length) {
					return b.matches.length - a.matches.length;
				}

				const aMatches = a.matches.join('').length;
				const bMatches = b.matches.join('').length;

				return bMatches - aMatches;
			})
			.map(c => c.entry);
	}

	public async get(query: string): Promise<MDN.Document> {
		const qString = `${MDNService.API_BASE_MDN}/${query.trim()}/index.json`;
		const hit = this.cache.get(qString);

		if (hit) {
			return hit;
		}

		return this.httpService
			.get<MDN.APIResult>(qString)
			.pipe(
				map(response => response.data?.doc),
				tap(hit => this.cache.set(qString, hit))
			)
			.toPromise();
	}
}
