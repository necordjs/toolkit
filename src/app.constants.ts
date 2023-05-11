import { EmbedBuilder } from 'discord.js';

export const DEFAULT_EMBED = () =>
	new EmbedBuilder().setColor('Blurple').setFooter({ text: 'Powered by necord' });

export const API_BASE_MDN = 'https://developer.mozilla.org' as const;
