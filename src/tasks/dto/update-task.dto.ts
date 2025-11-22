import { IsBoolean, IsOptional, IsString } from 'class-validator';
export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;
  @IsOptional()
  @IsString()
  body?: string;
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
