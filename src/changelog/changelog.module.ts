import { Module } from '@nestjs/common';
import { NecordPaginationModule } from '@necord/pagination';
import { HttpModule } from '@nestjs/axios';
import { ChangelogService } from './changelog.service';
import { ChangelogController } from './changelog.controller';
import { ButtonStyle } from 'discord.js';

@Module({
	imports: [
		HttpModule.register({
			baseURL: 'https://api.github.com'
		}),
		NecordPaginationModule.forRoot({
			buttons: {
				first: {
					label: ' ',
					style: ButtonStyle.Primary,
					emoji: '⏮️'
				},
				back: {
					label: ' ',
					style: ButtonStyle.Primary,
					emoji: '⬅️'
				},
				next: {
					label: ' ',
					style: ButtonStyle.Primary,
					emoji: '➡️'
				},
				last: {
					label: ' ',
					style: ButtonStyle.Primary,
					emoji: '⏭️'
				}
			},
			allowSkip: true,
			allowTraversal: false
		})
	],
	providers: [ChangelogController, ChangelogService]
})
export class ChangelogModule {}
