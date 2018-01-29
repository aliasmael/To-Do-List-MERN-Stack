import { Task } from '../models/Task'

export default interface IRepository {
	findAll(): Promise<Task[]>
	findOne(id: string): Promise<Task>
	add(task: Task): Promise<Task>
	delete(id: string): Promise<boolean>
	update(id: string, task: Task): Promise<Task>
}
