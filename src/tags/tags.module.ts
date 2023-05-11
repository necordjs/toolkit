import { Module } from '@nestjs/common';
import { TagsCommands } from './tags.commands';

@Module({
	providers: [TagsCommands]
})
export class TagsModule {}
