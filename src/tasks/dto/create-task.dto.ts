import { IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator';
export class CreateTaskDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  title?: string;

  @IsString()
  body?: string;

  @IsBoolean()
  completed?: boolean;
}
