export namespace MDN {
	export interface IndexEntry {
		title: string;
		url: string;
	}

	export interface APIResult {
		doc: Document;
	}

	export interface Document {
		mdn_url: string;
		score: number;
		title: string;
		locale: string;
		slug: string;
		popularity: number;
		archived: boolean;
		summary: string;
		highlight: Highlight;
	}

	export interface Highlight {
		body: string[];
		title: string[];
	}
}
