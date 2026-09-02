import { Module } from '@nestjs/common';

import { BitfieldsCommands } from './bitfields.commands.js';
import { BitfieldsService } from './bitfields.service.js';

@Module({
	providers: [BitfieldsCommands, BitfieldsService]
})
export class BitfieldsModule {}
