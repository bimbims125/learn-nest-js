import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common';

// Import DTO
import { CreateTaskDto } from './dto/create-task.dto';

//  Import Utils
import { ResponseUtils } from 'src/common/utils/response.util';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @HttpCode(200)
  findAll(@Req() req: Request) {
    const task = this.tasksService.findAll();
    return ResponseUtils.success('Tasks retrieved', task, req.url);
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: number, @Req() req: Request) {
    const task = this.tasksService.findOne(Number(id));
    return ResponseUtils.success('Task retrieved', task || {}, req.url);
  }

  @Post()
  @HttpCode(201)
  create(@Body() dto: CreateTaskDto, @Req() req: Request) {
    const task = this.tasksService.create(dto);
    return ResponseUtils.success('Task created', task, req.url);
  }

  @Put(':id')
  @HttpCode(200)
  update(
    @Param('id') id: number,
    @Body() dto: UpdateTaskDto,
    @Req() req: Request,
  ) {
    const task = this.tasksService.update(Number(id), dto);
    return ResponseUtils.success('Task updated', task || {}, req.url);
  }
}
