import UserRepository from './../repositories/UserRepository'

export interface IInsertUserRequest {
  fname: string,
  lname: string,
  title?: string,
  company?: string
}

export class User {
  public _id: string

  constructor(
    public fname: string,
    public lname: string,
    public title?: string,
    public company?: string
  ) { }

  public static vaidateInsertRequest = (insertRequest: IInsertUserRequest): Promise<User> => {
    return new Promise((resolve, reject) => {
      if (insertRequest.fname && insertRequest.title) {
        const userData = new User(
          insertRequest.fname,
          insertRequest.lname,
          insertRequest.title,
          insertRequest.company,
        )
        resolve(userData)
      } else {
        reject('fname & lname are required')
      }

    })
  }
}


class UserEntity {

  private _repository = new UserRepository()

  // Find user by id
  public findOne(id: string): Promise<User> {
    return this._repository.findOne(id)
  }

  // Get all Users
  public findAll(): Promise<User[]> {
    return this._repository.findAll()
  }

  // Insert new User
  public insert(User: User): Promise<User> {
    return this._repository.insert(User)
  }

  // Delete User
  public delete(id: string): Promise<boolean> {
    return this._repository.delete(id)
  }

  // Update User
  public update(id: string, User: User): Promise<User> {
    return this._repository.update(id, User)
  }
}

export const userEntity = new UserEntity