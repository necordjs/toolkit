import { Module } from '@nestjs/common';

import { GeneralCommands } from './general.commands.js';
import { GeneralService } from './general.service.js';

@Module({
	providers: [GeneralCommands, GeneralService]
})
export class GeneralModule {}
