import { AlgoliaHit } from '../interfaces';

export function resolveHitToName(hit: AlgoliaHit) {
	const { hierarchy } = hit;

	return `${hierarchy.lvl0 ?? hierarchy.lvl1 ?? ''}: ${hierarchy.lvl2 ?? hierarchy.lvl1 ?? ''}${
		hierarchy.lvl3 ? ` - ${hierarchy.lvl3}` : ''
	}`;
}
