import { userEntity, User } from './../models/User'
import { userPasswordEntity, UserPassword, RegeistrationRequest } from './../models/UserPassword'

class Service {
  // Get all users
  public findAll(): Promise<User[]> {
    return userEntity.findAll()
  }

  // Find ask by id
  public findOne(id: string): Promise<User> {
    return userEntity.findOne(id)
  }

  // Add new user
  public inesrt(user: User): Promise<User> {
    return userEntity.insert(user)
  }

  // Delete user
  public delete(id: string): Promise<boolean> {
    return userPasswordEntity.delete(id)
      .then((_) => {
        return userEntity.delete(id)
      })
  }

  public register(data: RegeistrationRequest): Promise<User> {
    let user: User = new User(data.fname, data.lname, data.title, data.company)

    return userPasswordEntity.findByUsernameOrEmail(data.username, data.password)
      .then((userPassword: UserPassword) => {
        console.log(userPassword)
        if (userPassword)
          throw "User already exist"
        else {
          return userEntity.insert(user)
            .then((user: User) => {
              let userPassword: UserPassword = new UserPassword(user._id, data.username, data.email, data.password)
              return userPasswordEntity.insert(userPassword)
                .then((_: UserPassword) => {
                  return user
                })
            })
        }
      })
  }

  public login(username: string, password: string): Promise<User> {
    return userPasswordEntity.login(username, password)
      .then((userPassword: UserPassword) => {
        if (userPassword)
          return userEntity.findOne(userPassword.userId)
        else
          throw "Username or password is incorrect";
      })
  }
}

let service = new Service
export default service