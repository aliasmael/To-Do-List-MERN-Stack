import {
  FETCH_TASKS,
  FETCH_TASKS_REJECTED,
  FETCH_TASKS_FULFILLED,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK
} from './constants';
import { Task } from '../models/Models'
import service from '../service'

export function fetchTasks() {
  return function(dispatch: any) {
    dispatch({type: FETCH_TASKS});

    service.fetch()
      .then((response: Task[]) => {
        dispatch({type: FETCH_TASKS_FULFILLED, payload: response})
      })
      .catch((err: Error) => {
        dispatch({type: FETCH_TASKS_REJECTED, payload: err})
      })
  }
}

export function addTask(title: string, description: string) {

  return function(dispatch: any) {
    service.addTask(title, description)
      .then((response: Task) => {
        dispatch({type: ADD_TASK, payload: response})
      })
      .catch((err: Error) => {
        dispatch({type: FETCH_TASKS_REJECTED, payload: err})
      })
  }
}

export function updateTask(id: string, title: string, description: string) {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      title,
      description
    },
  }
}

export function deleteTask(id: string) {
  return { 
    type: DELETE_TASK,
    payload: id
  }
}
