import { Algolia } from '../interfaces';

export function resolveHitToName(hit: Algolia.Hit) {
	const { hierarchy } = hit;

	const category = hierarchy.lvl1 ?? hierarchy.lvl0 ?? '';
	let subcategory = hierarchy.lvl2 ?? hierarchy.lvl1 ?? '';

	if (category === subcategory) {
		subcategory = 'Introduction';
	}

	return `${category}: ${subcategory}${hierarchy.lvl3 ? ` - ${hierarchy.lvl3}` : ''}`;
}
