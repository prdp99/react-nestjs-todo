import { Module } from '@nestjs/common';
import { NotesController } from './note.controller';
import { NotesService } from './note.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
