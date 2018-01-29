import { IService } from './IService'
import { ILoginResponse } from '../models/Models'

class MockService implements IService {
  login(_username: string, _password: string): Promise<ILoginResponse> {
    return new Promise((resolve, _) => {
      let response: ILoginResponse = { token: 'valid-login-token' }
      return resolve(response)
    })
  }
}

const service: IService = new MockService
export default service