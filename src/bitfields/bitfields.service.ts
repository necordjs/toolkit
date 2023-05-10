import { Injectable } from '@nestjs/common';
import { BitField } from 'discord.js';
import { BitEntry, BitProducer } from './interfaces';
import * as kleur from 'kleur';

@Injectable()
export class BitfieldsService {
	public formatBits<T extends bigint | number>(
		bits: BitField<string, T>,
		producer: BitProducer<T>
	) {
		const entries: BitEntry[] = [];

		for (const [key, val] of Object.entries(bits.serialize())) {
			if (Number.isNaN(Number.parseInt(key, 10))) {
				entries.push({
					bit: producer(key),
					name: key,
					represented: Boolean(val)
				});
			}
		}

		return entries
			.map(
				(entry, index) =>
					`${entry.represented ? kleur.green('[✔]') : kleur.red('[✖]')} ${entry.name} (${
						entry.bit
					}) 1<<${index}`
			)
			.join('\n');
	}
}
