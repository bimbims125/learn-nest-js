import { IsNumber, IsString, IsBoolean } from 'class-validator';
export class GetTaskDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsBoolean()
  completed: boolean;
}
