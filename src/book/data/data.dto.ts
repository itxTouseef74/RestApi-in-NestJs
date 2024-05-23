import { IsInt, IsString, Min, Max, Length } from 'class-validator';

export class Book {
  @IsInt()
  id: number;

  @IsString()
  @Length(1, 100)
  title: string;

  @IsString()
  @Length(1, 100)
  author: string;

  @IsInt()
  @Min(0)
  @Max(9999)
  year: number;
}
