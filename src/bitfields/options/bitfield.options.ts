import { IntegerOption } from 'necord';

export class BitfieldOptions {
	@IntegerOption({ name: 'bitfield', description: 'Gateway Intents', required: true })
	public bitfield!: number;
}
