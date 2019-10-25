import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  description: string;

  @Column({ length: 20 })
  status: string;
}