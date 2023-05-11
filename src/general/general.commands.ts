import { Injectable } from '@nestjs/common';
import {
	Context,
	MessageCommand,
	MessageCommandContext,
	Options,
	SlashCommand,
	SlashCommandContext,
	TargetMessage,
	TargetUser,
	UserCommand,
	UserCommandContext
} from 'necord';
import { GeneralService } from './general.service';
import {
	Client,
	hideLinkEmbed,
	hyperlink,
	inlineCode,
	Message,
	SnowflakeUtil,
	time,
	TimestampStyles,
	User
} from 'discord.js';
import { SnowflakeOptions, UserOptions } from './options';
import { DEFAULT_EMBED } from '../app.constants';

@Injectable()
export class GeneralCommands {
	public constructor(
		private readonly generalService: GeneralService,
		private readonly client: Client
	) {}

	@SlashCommand({ name: 'ping', description: 'Get bot ping' })
	public async ping(@Context() [interaction]: SlashCommandContext) {
		return interaction.reply({
			content: `Pong!`,
			ephemeral: true
		});
	}

	@SlashCommand({ name: 'invite', description: 'Get bot invite' })
	public async invite(@Context() [interaction]: SlashCommandContext) {
		return interaction.reply({
			content: hyperlink(
				'(click here)',
				hideLinkEmbed(
					`https://discord.com/api/oauth2/authorize?client_id=${this.client.application.id}&permissions=8&scope=bot&applications.commands`
				)
			),
			ephemeral: true
		});
	}

	@SlashCommand({ name: 'snowflake', description: 'Get snowflake info' })
	public async snowflake(
		@Context() [interaction]: SlashCommandContext,
		@Options() options: SnowflakeOptions
	) {
		if (!/^\d{17,20}$/gi.test(options.snowflake)) {
			return interaction.reply({
				content: 'Invalid snowflake',
				ephemeral: true
			});
		}

		const timestamp = SnowflakeUtil.timestampFrom(options.snowflake);
		const embed = DEFAULT_EMBED().setDescription(
			`Snowflake: ${inlineCode(options.snowflake)}\nTimestamp: ${time(
				new Date(timestamp),
				TimestampStyles.LongDateTime
			)}`
		);

		return interaction.reply({
			embeds: [embed],
			ephemeral: true
		});
	}

	@SlashCommand({ name: 'user', description: 'Get user info' })
	public async user(
		@Context() [interaction]: SlashCommandContext,
		@Options() options: UserOptions
	) {
		const embed = await this.generalService.applyUserInfo(DEFAULT_EMBED(), options.user);

		return interaction.reply({
			embeds: [embed],
			ephemeral: true
		});
	}

	@UserCommand({ name: 'Get user info' })
	public async userCommand(
		@Context() [interaction]: UserCommandContext,
		@TargetUser() user: User
	) {
		const embed = await this.generalService.applyUserInfo(DEFAULT_EMBED(), user);

		return interaction.reply({
			embeds: [embed],
			ephemeral: true
		});
	}

	@MessageCommand({ name: 'Get user info' })
	public async messageCommand(
		@Context() [interaction]: MessageCommandContext,
		@TargetMessage() message: Message
	) {
		const embed = await this.generalService.applyUserInfo(DEFAULT_EMBED(), message.author);

		return interaction.reply({
			embeds: [embed],
			ephemeral: true
		});
	}
}
