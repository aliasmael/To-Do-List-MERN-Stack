import { IService } from './IService'
import { Task } from '../models/Models'
import tasks from '../fixtures/tasks'

class MockService implements IService {
  fetch(): Promise<Task[]> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        let response: Task[] = JSON.parse(JSON.stringify(tasks))
        return resolve(response)
      }, 1000)
    })
  }

  addTask(_title: string, _description: string): Promise<Task> {
    throw new Error("Method not implemented.");
  }

  deleteTask(_id: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  completeTask(_id: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  reopenTask(_id: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
}

const service: IService = new MockService
export default service