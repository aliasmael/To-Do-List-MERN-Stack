import { Task } from '../models/Models'

export interface IService {
  fetch(): Promise<Task[]>
  addTask(title: string, description: string): Promise<Task>
  deleteTask(id: string): Promise<string>
  completeTask(id: string): Promise<string>
  reopenTask(id: string): Promise<string>
}