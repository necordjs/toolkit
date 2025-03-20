import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { MetricService } from 'nestjs-otel';
import { Observable, tap } from 'rxjs';
import { NecordExecutionContext, SlashCommandDiscovery, SlashCommandContext } from 'necord';

@Injectable()
export class CommandMetricsInterceptor implements NestInterceptor {
	private readonly logger: Logger = new Logger(CommandMetricsInterceptor.name);

	private readonly commandExecutionCounter = this.metricService.getCounter(
		'toolkit_bot_command_execution_total',
		{
			description: 'Total number of commands executions'
		}
	);

	private readonly commandExecutionDuration = this.metricService.getCounter(
		'toolkit_bot_command_execution_duration',
		{
			description: 'Total duration of commands executions'
		}
	);

	public constructor(private readonly metricService: MetricService) {}

	public async intercept(
		context: ExecutionContext,
		next: CallHandler<any>
	): Promise<Observable<any>> {
		const necordContext = NecordExecutionContext.create(context);

		if (necordContext.getType() !== 'necord') {
			return next.handle();
		}

		const discovery = necordContext.getDiscovery();

		if (!discovery.isSlashCommand()) {
			return next.handle();
		}

		const [interaction] = necordContext.getContext<SlashCommandContext>();
		const commandName = [
			interaction.commandName,
			interaction.options.getSubcommandGroup(false),
			interaction.options.getSubcommand(false)
		]
			.filter(Boolean)
			.join(' ');

		const metadata = {
			command: commandName,
			type: interaction.channel.isDMBased() ? 'dm' : 'guild'
		};

		this.commandExecutionCounter.add(1, metadata);

		return next.handle().pipe(
			tap(() => {
				this.commandExecutionDuration.add(
					Date.now() - interaction.createdAt.getTime(),
					metadata
				);
			})
		);
	}
}
