import { Injectable, OnModuleInit } from '@nestjs/common';
import { ChangelogService } from './changelog.service';
import { Context, SlashCommand, SlashCommandContext } from 'necord';
import { NecordPaginationService, PageBuilder } from '@necord/pagination';
import { map, switchMap, tap, timer } from 'rxjs';
import { EmbedBuilder, time } from 'discord.js';

@Injectable()
export class ChangelogController implements OnModuleInit {
	public constructor(
		private readonly changelogService: ChangelogService,
		private readonly paginationService: NecordPaginationService
	) {}

	public onModuleInit() {
		return timer(0, 1000 * 60 * 60)
			.pipe(
				switchMap(() => this.changelogService.changelog),
				tap(changelog =>
					this.paginationService.register(builder =>
						builder
							.setCustomId('changelog')
							.setMaxPages(changelog.length)
							.setPages(
								changelog.map(release =>
									new PageBuilder().addEmbed(
										new EmbedBuilder()
											.setAuthor({
												name: release.author.login,
												url: release.author.url,
												iconURL: release.author.avatar_url
											})
											.setTitle(`Changelog | Release ${release.tag_name}`)
											.setURL(release.url)
											.setDescription(
												release.body
													.slice(0, 4096)
													.replace(/\r\n\r\n/g, '\n')
											)
											.setColor('Blurple')
											.setFields([
												{
													name: 'Created At',
													value: `${time(
														new Date(release.created_at)
													)} (${time(
														new Date(release.created_at),
														'R'
													)})`,
													inline: true
												},
												{
													name: 'Published At',
													value: `${time(
														new Date(release.published_at)
													)} (${time(
														new Date(release.published_at),
														'R'
													)})`,
													inline: true
												}
											])
									)
								)
							)
					)
				)
			)
			.subscribe();
	}

	@SlashCommand({ name: 'changelog', description: 'Get the latest changelog' })
	public async changelog(@Context() [interaction]: SlashCommandContext) {
		const pageBuilder = this.paginationService.get('changelog');
		const pageOptions = await pageBuilder.build();

		return interaction.reply(pageOptions);
	}
}
