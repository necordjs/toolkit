import { User } from 'discord.js';
import { UserOption } from 'necord';

export class UserOptions {
	@UserOption({ name: 'user', description: 'User', required: true })
	public user!: User;
}
