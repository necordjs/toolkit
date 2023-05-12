import { Injectable, Logger } from '@nestjs/common';
import { Context, ContextOf, On, Once } from 'necord';

@Injectable()
export class AppService {
	private readonly logger = new Logger(AppService.name);

	@Once('ready')
	public onReady(@Context() [client]: ContextOf<'ready'>) {
		this.logger.log(`Logged in as ${client.user.tag}!`);
	}

	@On('warn')
	public onWarn(@Context() [info]: ContextOf<'warn'>) {
		this.logger.warn(info);
	}

	@On('error')
	public onError(@Context() [error]: ContextOf<'error'>) {
		this.logger.error(error);
	}

	@On('debug')
	public onDebug(@Context() [info]: ContextOf<'debug'>) {
		this.logger.debug(info);
	}
}
