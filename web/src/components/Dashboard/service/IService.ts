import { Task } from '../models/Models'

export interface IService {
  fetch(): Promise<Task[]>
}