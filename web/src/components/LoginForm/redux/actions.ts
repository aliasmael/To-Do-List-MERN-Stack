import { ILoginResponse } from '../models/Models'
import service from '../service/Mock'

export function login(username: string, password: string) {
  return function (dispatch: (action: object) => void ) {
    dispatch({ type: "USER_LOGIN" });
    service.login(username, password)
      .then((response: ILoginResponse) => {
        dispatch({ type: "USER_LOGIN_FULFILLED", payload: response })
      })
      .catch((_: Error) => {
        dispatch({ type: "USER_LOGIN_REJECTED", payload: 'Wrong username or password!' })
      })
  }
}