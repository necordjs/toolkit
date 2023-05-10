import { EmbedBuilder } from 'discord.js';

export const DEFAULT_EMBED = () =>
	new EmbedBuilder().setColor('Blurple').setFooter({ text: 'Powered by necord' });

export const API_BASE_MDN = 'https://developer.mozilla.org' as const;
export const API_BASE_NODE = 'https://nodejs.org' as const;
export const API_BASE_ALGOLIA = 'algolia.net' as const;
export const API_BASE_DISCORD = 'https://discord.com/api/v10' as const;
