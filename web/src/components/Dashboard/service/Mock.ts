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
}

const service: IService = new MockService
export default service