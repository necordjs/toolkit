import { Module } from '@nestjs/common';

import { TagsCommands } from './tags.commands.js';

@Module({
	providers: [TagsCommands]
})
export class TagsModule {}
