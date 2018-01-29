import taskEntity from './../models/TaskEntity'
import { Task } from '../models/Task';

class Service {

	// Get all tasks
	public findAll(): Promise<Task[]> {
		return taskEntity.findAll()
	}

	// Find ask by id
	public findOne(id: string): Promise<Task> {
		return taskEntity.findOne(id)
	}

	// Add new task
	public add(task: Task): Promise<Task> {
		return taskEntity.add(task)
	}

	// Delete task
	public delete(id: string): Promise<boolean> {
		return taskEntity.delete(id)
	}

	// Complete task
	public complete(id: string): Promise<Task> {
		return this.findOne(id).then((task) => {
			task.status = "COMPLETED"
			return taskEntity.update(id, task)
		})
	}

	// Reopen task
	public reopen(id: string): Promise<Task> {
		return this.findOne(id).then((task) => {
			task.status = "NOTCOMPLETED"
			return taskEntity.update(id, task)
		})
	}
}

let service = new Service
export default service