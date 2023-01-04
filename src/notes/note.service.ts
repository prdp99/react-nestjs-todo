import { Injectable } from '@nestjs/common';
import { NotesDto, updateNoteDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  //getting all notes
  async getNotes() {
    try {
      const notes = await this.prisma.note.findMany();
      return notes;
    } catch (err) {
      throw err;
    }
  }

  //getting filtered notes
  async getFilteredNotes(dto: { status: string }) {
    try {
      const notes = await this.prisma.note.findMany({
        where: {
          status: dto.status,
        },
      });
      return notes;
    } catch (err) {
      throw err;
    }
  }

  //creating new note
  async createNote(dto: NotesDto) {
    console.log('we got res');
    try {
      const note = await this.prisma.note.create({
        data: {
          title: dto.title,
          description: dto.description,
          file: dto.file,
          user_id: parseInt(dto.user_id),
        },
      });
      return note;
    } catch (err) {
      throw err;
    }
  }

  //updating notes
  async updateNote(dto: updateNoteDto) {
    try {
      const note = await this.prisma.note.updateMany({
        where: {
          id: parseInt(dto.id),
          user_id: parseInt(dto.user_id),
        },
        data: {
          title: dto.title,
          description: dto.description,
          file: dto.file,
          status: dto.status,
        },
      });
      return note;
    } catch (err) {
      throw err;
    }
  }

  //deleting notes
  async deleteNote(dto: updateNoteDto) {
    try {
      const note = await this.prisma.note.deleteMany({
        where: {
          id: parseInt(dto.id),
          user_id: parseInt(dto.user_id),
        },
      });
      return note;
    } catch (err) {
      console.log(err);
    }
  }
}
