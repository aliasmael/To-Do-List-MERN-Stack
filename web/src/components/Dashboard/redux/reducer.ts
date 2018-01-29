import { IDashboardState } from '../models/Models'
import { Action } from 'redux-actions';
import {
  FETCH_TASKS,
  FETCH_TASKS_REJECTED,
  FETCH_TASKS_FULFILLED
} from './constants';

const initialState: IDashboardState = {
  tasks: {
    kind: "NotAsked"
  }
}

export default function reducer(state: IDashboardState = initialState, action: Action<any>): IDashboardState {

  switch (action.type) {
    case FETCH_TASKS: {
      return {
        ...state,
        tasks: {
          kind: "Loading"
        }
      }
    }
    case FETCH_TASKS_REJECTED: {
      return {
        ...state, 
        tasks: {
          kind: "Failure",
          error: "Something went wrong"
        }
      }
    }
    case FETCH_TASKS_FULFILLED: {
      return {
        ...state,
        tasks: {
          kind: "Success",
          data: action.payload
        }
      }
    }
  }

  return state
}
