import {
  USER_LOGIN,
  USER_LOGIN_REJECTED,
  USER_LOGIN_FULFILLED
} from './constants'
import { IUserState } from '../models/Models'
import { User } from '../../../models/Models'
import { Action } from 'redux-actions'

const authUser: User = {
  id: 'guid',
  username: 'ali.ismael',
  firstname: 'Ali',
  lastname: 'Ismael',
  title: 'Software Developer',
  profileImage: '',
  isGuest: false,
  company: ''
}

const guestUser: User = {
  id: 'guid',
  username: 'Guest',
  firstname: 'Guest',
  lastname: 'User',
  title: '',
  profileImage: '',
  isGuest: true,
  company: ''
}

const initialState: IUserState = {
  user: guestUser,
  fetching: false,
  fetched: false,
  error: false,
  errorMessage: ''
}

export default function reducer(state: IUserState = initialState, action: Action<any>): IUserState {

  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        fetching: true
      }
    }
    case USER_LOGIN_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.payload
      }
    }
    case USER_LOGIN_FULFILLED: {
      const user: User = authUser //TO-DO Add correct user data (guid, username, img)

      return {
        ...state,
        fetching: false,
        fetched: true,
        user: user
      }
    }
  }

  return state
}
