import { Module } from '@nestjs/common';
import { GeneralCommands } from './general.commands';
import { GeneralService } from './general.service';

@Module({
	providers: [GeneralCommands, GeneralService]
})
export class GeneralModule {}
