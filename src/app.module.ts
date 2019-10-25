import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/task.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'pepe',
    database: 'db_task',
    entities: [Task],
    synchronize: true,
  }),
    TaskModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
