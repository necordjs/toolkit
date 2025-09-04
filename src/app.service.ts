import { Injectable, Logger } from '@nestjs/common';
import { Context, ContextOf, On, Once } from 'necord';
import { MetricService } from 'nestjs-otel';
import { Client } from 'discord.js';

@Injectable()
export class AppService {
	private readonly logger = new Logger(AppService.name);

	private readonly guildsGauge = this.metricService.getObservableGauge('discord_guilds_total', {
		description: 'Total number of guilds the bot is in'
	});

	private readonly usersGauge = this.metricService.getObservableGauge('discord_users_total', {
		description: 'Total number of users the bot is in'
	});

	private readonly pingGauge = this.metricService.getObservableGauge('discord_ping', {
		description: 'Bot ping in milliseconds'
	});

	public constructor(
		private readonly client: Client,
		private readonly metricService: MetricService
	) {}

	@Once('clientReady')
	public onReady(@Context() [client]: ContextOf<'clientReady'>) {
		this.logger.log(`Logged in as ${client.user.tag}!`);
		this.pingGauge.addCallback(result => result.observe(this.client.ws.ping));
		this.guildsGauge.addCallback(result => result.observe(this.client.guilds.cache.size));
		this.usersGauge.addCallback(result => result.observe(this.client.users.cache.size));
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
		this.logger.log(`Joined guild: ${guild.name}`);
	}

	@On('guildDelete')
	public onGuildDelete(@Context() [guild]: ContextOf<'guildDelete'>) {
		this.logger.log(`Left guild: ${guild.name}`);
	}
}
