import { SentryGlobalFilter } from '@sentry/nestjs/setup';
import { type ArgumentsHost, Catch } from '@nestjs/common';
import { NecordArgumentsHost } from 'necord';
import { captureException } from '@sentry/nestjs';

@Catch()
export class NecordSentryExceptionFilter extends SentryGlobalFilter {
	public catch(exception: unknown, host: ArgumentsHost) {
		const necordArgumentsHost = NecordArgumentsHost.create(host);
		const type = necordArgumentsHost.getType();

		if (type !== 'necord') {
			return super.catch(exception, host);
		}

		captureException(exception);
		throw exception;
	}
}
