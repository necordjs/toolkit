import { StringOption } from 'necord';

export class SnowflakeOptions {
	@StringOption({
		name: 'snowflake',
		description: 'Snowflake',
		required: true,
		min_length: 17,
		max_length: 20
	})
	public snowflake!: string;
}
