import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { NotesService } from './note.service';
import { NotesDto, updateNoteDto } from './dto';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get('allNotes')
  getNotes() {
    return this.notesService.getNotes();
  }

  @Get('filterNotes')
  getFilteredNotes(@Body() dto: { status: string }) {
    return this.notesService.getFilteredNotes(dto);
  }

  @Post('create')
  createNote(@Body() dto: NotesDto) {
    return this.notesService.createNote(dto);
  }

  @Put('update')
  updateNote(@Body() dto: updateNoteDto) {
    return this.notesService.updateNote(dto);
  }

  @Delete('delete')
  deleteNote(@Body() dto: updateNoteDto) {
    return this.notesService.deleteNote(dto);
  }
}
