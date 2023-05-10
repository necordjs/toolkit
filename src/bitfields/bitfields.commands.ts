import {
	Context,
	createCommandGroupDecorator,
	Options,
	SlashCommandContext,
	Subcommand
} from 'necord';
import { BitfieldOptions } from './options';
import { codeBlock, IntentsBitField, PermissionFlagsBits, PermissionsBitField } from 'discord.js';
import { BitfieldsService } from './bitfields.service';
import { DEFAULT_EMBED } from '../app.constants';

const BitFieldsCommand = createCommandGroupDecorator({
	name: 'bitfields',
	description: 'Bitfields commands'
});

@BitFieldsCommand()
export class BitfieldsCommands {
	public constructor(private readonly service: BitfieldsService) {}

	@Subcommand({ name: 'intents', description: 'Destructure Gateway Intents' })
	public intents(
		@Context() [interaction]: SlashCommandContext,
		@Options() options: BitfieldOptions
	) {
		const intents = new IntentsBitField(options.bitfield);

		const embed = DEFAULT_EMBED()
			.setTitle(`Gateway Intents deconstruction for ${intents.bitfield}`)
			.setDescription(
				codeBlock(
					'ansi',
					this.service.formatBits(intents, key => IntentsBitField.Flags[key])
				)
			);

		return interaction.reply({
			embeds: [embed],
			ephemeral: true
		});
	}

	@Subcommand({ name: 'permissions', description: 'Destructure Permissions' })
	public permissions(
		@Context() [interaction]: SlashCommandContext,
		@Options() options: BitfieldOptions
	) {
		const permissions = new PermissionsBitField(BigInt(options.bitfield));

		const embed = DEFAULT_EMBED()
			.setTitle(`Permissions deconstruction for ${permissions.bitfield}`)
			.setDescription(
				codeBlock(
					'ansi',
					this.service.formatBits(permissions, key => PermissionFlagsBits[key])
				)
			);

		return interaction.reply({
			embeds: [embed],
			ephemeral: true
		});
	}
}
