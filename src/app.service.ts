import { Injectable, Logger } from '@nestjs/common';
import { Context, ContextOf, Once } from 'necord';

@Injectable()
export class AppService {
	private readonly logger = new Logger(AppService.name);

	@Once('ready')
	public onReady(@Context() [client]: ContextOf<'ready'>) {
		this.logger.log(`Logged in as ${client.user.tag}!`);
	}
}
