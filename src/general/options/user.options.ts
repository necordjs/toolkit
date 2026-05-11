import { UserOption } from 'necord';
import { User } from 'discord.js';

export class UserOptions {
	@UserOption({ name: 'user', description: 'User', required: true })
	public user!: User;
}
