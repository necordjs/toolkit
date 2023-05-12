export namespace Algolia {
	export interface App {
		appId: string;
		apiKey: string;
		index: string;
	}

	export namespace Search {
		export interface Response {
			hits?: Hit[];
			query: string;
		}
	}

	export interface Hit {
		anchor: string;
		content?: string;
		hierarchy: Hit.Hierarchy;
		url: string;
		objectID: string;
	}

	export namespace Hit {
		export interface Hierarchy {
			lvl0?: string;
			lvl1?: string;
			lvl2?: string;
			lvl3?: string;
			lvl4?: string;
			lvl5?: string;
			lvl6?: string;
		}

		export function getFormattedHierarchy(hit: Hit) {
			const { hierarchy } = hit;

			const category = hierarchy.lvl1 ?? hierarchy.lvl0 ?? '';
			let subcategory = hierarchy.lvl2 ?? hierarchy.lvl1 ?? '';

			if (category === subcategory || subcategory === '') {
				subcategory = 'Introduction';
			}

			return `${category}: ${subcategory}${hierarchy.lvl3 ? ` - ${hierarchy.lvl3}` : ''}`;
		}
	}
}
