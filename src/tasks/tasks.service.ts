import { Injectable } from '@nestjs/common';

// Import DTO (Data Transfer Object)
import { GetTaskDto } from './dto/get-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: GetTaskDto[] = [];
  private idCounter: number = 1;

  findAll(): GetTaskDto[] {
    return this.tasks;
  }

  findOne(id: number): GetTaskDto | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  create(createTaskDto: CreateTaskDto): CreateTaskDto {
    const task = new GetTaskDto();
    task.id = this.idCounter++;
    task.title = createTaskDto.title || '';
    task.body = createTaskDto.body || '';
    task.completed = createTaskDto.completed || false;
    this.tasks.push(task);
    return task;
  }
}
