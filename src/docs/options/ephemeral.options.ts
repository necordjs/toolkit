import { BooleanOption } from 'necord';

export class EphemeralOptions {
	@BooleanOption({ name: 'hide', description: 'Hide command output', required: false })
	public hide?: boolean = true;
}
