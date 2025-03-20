import { Injectable, Logger } from '@nestjs/common';
import { Context, ContextOf, On, Once } from 'necord';
import { MetricService } from 'nestjs-otel';
import { Client } from 'discord.js';

@Injectable()
export class AppService {
	private readonly logger = new Logger(AppService.name);

	private readonly guildsCounter = this.metricService.getCounter('toolkit_bot_guilds_total', {
		description: 'Total number of guilds the bot is in'
	});

	private readonly pingGauge = this.metricService.getObservableGauge('toolkit_bot_ping', {
		description: 'Bot ping in milliseconds'
	});

	public constructor(
		private readonly client: Client,
		private readonly metricService: MetricService
	) {}

	@Once('ready')
	public onReady(@Context() [client]: ContextOf<'ready'>) {
		this.logger.log(`Logged in as ${client.user.tag}!`);
		this.pingGauge.addCallback(result => result.observe(this.client.ws.ping));
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

	@On('guildCreate')
	public onGuildCreate(@Context() [guild]: ContextOf<'guildCreate'>) {
		this.guildsCounter.add(1);
		this.logger.log(`Joined guild: ${guild.name}`);
	}

	@On('guildDelete')
	public onGuildDelete(@Context() [guild]: ContextOf<'guildDelete'>) {
		this.guildsCounter.add(-1);
		this.logger.log(`Left guild: ${guild.name}`);
	}
}
