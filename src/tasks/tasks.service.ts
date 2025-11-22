import { Injectable } from '@nestjs/common';

// Import DTO (Data Transfer Object)
import { GetTaskDto } from './dto/get-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

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

  update(id: number, updateTaskDto: UpdateTaskDto): GetTaskDto | undefined {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      return undefined;
    }
    if (updateTaskDto.title !== undefined) {
      task.title = updateTaskDto.title;
    }
    if (updateTaskDto.body !== undefined) {
      task.body = updateTaskDto.body;
    }
    if (updateTaskDto.completed !== undefined) {
      task.completed = updateTaskDto.completed;
    }
    return task;
  }
}
