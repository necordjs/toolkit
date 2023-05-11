import { Algolia } from '../interfaces';

export function resolveHitToName(hit: Algolia.Hit) {
	const { hierarchy } = hit;

	return `${hierarchy.lvl0 ?? hierarchy.lvl1 ?? ''}: ${hierarchy.lvl2 ?? hierarchy.lvl1 ?? ''}${
		hierarchy.lvl3 ? ` - ${hierarchy.lvl3}` : ''
	}`;
}
