import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class NotesDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  file: string;

  @IsOptional()
  @IsString()
  status: string;

  @IsString()
  user_id: string;
}

export class updateNoteDto extends NotesDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
