import { Task } from '../models/Models'

export interface IService {
  fetch(): Promise<Task[]>
  addTask(title: string, description: string): Promise<Task>
}