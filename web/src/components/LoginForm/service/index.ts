import { IService } from './IService'
import { ILoginResponse } from '../models/Models';
import axios from 'axios'

const baseUrl = 'http://localhost:3000/api'

class Service implements IService {
  login(username: string, password: string): Promise<ILoginResponse> {
    let data = {
      username: username,
      password: password
    }

    return new Promise((resolve, reject) => {
      axios.post(baseUrl + '/auth/login', data)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err: Error) => {
          reject(err.message)
        })
    })
  }
  
}

const service: IService = new Service
export default service