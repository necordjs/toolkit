import { Injectable } from '@nestjs/common';
import { EmbedBuilder, inlineCode, italic, time, TimestampStyles, User } from 'discord.js';
import { formatUserFlag } from './utils';

@Injectable()
export class GeneralService {
	public async applyUserInfo(embed: EmbedBuilder, user: User) {
		const notices: string[] = [];
		await user.fetch(true);

		const userInfo: string[] = [
			`Name: ${user.toString()} ${inlineCode(user.tag)}`,
			`ID: ${inlineCode(user.id)}`,
			`Created: ${time(user.createdAt, TimestampStyles.ShortDateTime)} (${time(
				user.createdAt,
				TimestampStyles.RelativeTime
			)})`
		];

		if (user.avatar) {
			userInfo.push(
				`Avatar: [${user.avatar}](${user.avatarURL({ extension: 'png', size: 2048 })})`
			);
		}

		const bannerURL = user.bannerURL({ extension: 'png', size: 2048 });

		if (bannerURL && user.banner) {
			userInfo.push(`Banner: [${user.banner}](${bannerURL})`);
		}

		embed.setThumbnail(user.displayAvatarURL({ extension: 'png', size: 2048 }));

		if (user.bot) {
			notices.push('Bot application');
		}

		if (user.flags?.bitfield) {
			const flagStrings: string[] = user.flags
				.toArray()
				.map(flag => italic(formatUserFlag(flag)));
			notices.push(`Flags: ${flagStrings.join(', ')}`);
		}

		embed.addFields({
			name: 'User Info',
			value: userInfo.map(info => `• ${info}`).join('\n')
		});

		if (notices.length) {
			embed.addFields({
				name: 'Notices',
				value: notices.map(notice => `• ${notice}`).join('\n')
			});
		}

		return embed;
	}
}
