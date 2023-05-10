import { Module } from '@nestjs/common';
import { BitfieldsCommands } from './bitfields.commands';
import { BitfieldsService } from './bitfields.service';

@Module({
	providers: [BitfieldsCommands, BitfieldsService]
})
export class BitfieldsModule {}
