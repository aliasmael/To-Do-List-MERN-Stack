import UserPasswordRepository from './../repositories/UserPasswordRepository'

export interface RegeistrationRequest {
  username: string,
  email: string,
  password: string,
  repeatedPassword: string,
  fname: string,
  lname: string,
  title?: string,
  company?: string,
}

export interface LoginRequest {
  username: string,
  password: string
}

export class UserPassword {

  constructor(
    public userId: string,
    public username: string,
    public email: string,
    public password: string
  ) { }

  public static validateRegisterationRequest = (insertRequest: RegeistrationRequest): Promise<RegeistrationRequest> => {
    return new Promise((resolve, reject) => {
      if (insertRequest.username 
        && insertRequest.email 
        && insertRequest.password 
        && insertRequest.repeatedPassword 
        && insertRequest.fname 
        && insertRequest.lname) {
        if (insertRequest.password == insertRequest.repeatedPassword) {
          resolve(insertRequest)
        } else {
          reject('Passwords does not matches')
        }
      } else {
        reject('fname, lname, username, email, password and repeatedPassword are required')
      }
    })
  }

  public static validateLoginRequest = (insertRequest: RegeistrationRequest): Promise<LoginRequest> => {
    return new Promise((resolve, reject) => {
      if (insertRequest.username && insertRequest.password) {
        resolve(insertRequest)
      } else {
        reject('username and password are required')
      }

    })
  }
}


class UserPasswordEntity {

  private _repository = new UserPasswordRepository()

  // Get all UserPasswords
  public findOne(id: string): Promise<UserPassword> {
    return this._repository.findOne(id)
  }

  // Get all UserPasswords
  public findAll(): Promise<UserPassword[]> {
    return this._repository.findAll()
  }

  // Insert new UserPassword
  public insert(UserPassword: UserPassword): Promise<UserPassword> {
    return this._repository.insert(UserPassword)
  }

  // Delete UserPassword
  public delete(id: string): Promise<boolean> {
    return this._repository.delete(id)
  }

  // Update UserPassword
  public update(id: string, UserPassword: UserPassword): Promise<UserPassword> {
    return this._repository.update(id, UserPassword)
  }

  // Find user by username or email
  public findByUsernameOrEmail(username: string, email: string): Promise<UserPassword> {
    return this._repository.findByUsernameOrEmail(username, email)
  }

  // Get all Users
  public login(username: string, password: string): Promise<UserPassword> {
    return this._repository.login(username, password)
  }
}

export const userPasswordEntity = new UserPasswordEntity