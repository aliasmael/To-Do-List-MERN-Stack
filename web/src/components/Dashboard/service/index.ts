import { Task } from '../models/Models'
import { IService } from './IService'
import axios from 'axios'

class Service implements IService {
  fetch(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/task')
        .then((res) => {
          let tasks = res.data
          resolve(tasks)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

}

const service: IService = new Service
export default service