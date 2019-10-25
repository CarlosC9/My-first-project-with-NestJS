import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('task')
export class TaskController {

    constructor(private taskService : TaskService) {}

    @Get()
    getAllTask() {
        return this.taskService.findAll();
    }

    @Post()
    addTask(@Body() task : CreateTaskDto) {
        this.taskService.addTask(task);
    }
}
