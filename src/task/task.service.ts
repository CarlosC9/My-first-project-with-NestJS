import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(Task) protected taskRepository : Repository<Task>,
    ){}

    findAll() {
        return this.taskRepository.find();
    }

    addTask(task : CreateTaskDto) {
        this.taskRepository.save(task);
    }
}
