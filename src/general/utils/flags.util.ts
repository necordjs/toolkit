import type { UserFlags } from 'discord.js';

export function formatUserFlag(flag: keyof typeof UserFlags) {
	switch (flag) {
		case 'ActiveDeveloper':
			return 'Active Developer';
		case 'BotHTTPInteractions':
			return 'Bot Interaction';
		case 'BugHunterLevel1':
			return 'Bug Hunter';
		case 'BugHunterLevel2':
			return 'Bug Hunter (gold)';
		case 'PremiumEarlySupporter':
			return 'Early Supporter';
		case 'CertifiedModerator':
			return 'Certified Moderator';
		case 'HypeSquadOnlineHouse1':
			return 'House Bravery';
		case 'HypeSquadOnlineHouse2':
			return 'House Brilliance';
		case 'HypeSquadOnlineHouse3':
			return 'House Balance';
		case 'VerifiedBot':
			return 'Discord application (verified)';
		case 'Hypesquad':
			return 'Hypesquad Events';
		case 'Partner':
			return 'Discord Partner';
		case 'VerifiedDeveloper':
			return 'Early verified developer';
		default:
			return flag;
	}
}
