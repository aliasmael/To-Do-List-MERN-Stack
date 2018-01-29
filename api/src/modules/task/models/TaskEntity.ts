import { Task } from './Task'
import IRepository from './../repositories/IRepository'
import MongoRepository from './../repositories/MongoRepository'

// Task repository
let _repository: IRepository = new MongoRepository();

class TaskEntity {

	// Get all tasks
	public findOne(id: string): Promise<Task> {
		return _repository.findOne(id)
	}

	// Get all tasks
	public findAll(): Promise<Task[]> {
		return _repository.findAll()
	}

	// Add new task
	public add(task: Task): Promise<Task> {
		return _repository.add(task)
	}

	// Delete task
	public delete(id: string): Promise<boolean> {
		return _repository.delete(id)
	}

	// Update task
	public update(id: string, task: Task): Promise<Task> {
		return _repository.update(id, task)
	}
}

const entity = new TaskEntity
export default entity