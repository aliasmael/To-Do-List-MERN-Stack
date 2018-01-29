import { ILoginResponse } from '../models/Models'

export interface IService {
  login(username: string, password: string): Promise<ILoginResponse>
}