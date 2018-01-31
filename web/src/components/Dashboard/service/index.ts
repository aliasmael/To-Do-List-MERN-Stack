import { Task } from '../models/Models'
import { IService } from './IService'
import axios from 'axios'

const baseUrl = 'http://localhost:3000/api'

class Service implements IService {
  fetch(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/task')
        .then((res) => {
          let tasks = res.data
          resolve(tasks)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  addTask(title: string, description: string): Promise<Task> {
    let data = {
      title: title,
      description: description
    }

    return new Promise((resolve, reject) => {
      axios.post(baseUrl + '/task', data)
        .then((res) => {
          let task = res.data
          resolve(task)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

}

const service: IService = new Service
export default service