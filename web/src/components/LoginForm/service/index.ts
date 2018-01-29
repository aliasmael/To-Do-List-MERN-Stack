import { IService } from './IService'
import { ILoginResponse } from '../models/Models'

class Service implements IService {
  login(_username: string, _password: string): Promise<ILoginResponse> {
    throw new Error("Method not implemented.");
  }
  
}

const service: IService = new Service
export default service