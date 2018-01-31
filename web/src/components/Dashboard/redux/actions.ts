import {
  FETCH_TASKS,
  FETCH_TASKS_REJECTED,
  FETCH_TASKS_FULFILLED,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
  REOPEN_TASK,
  ADD_TASK_REJECTED,
  DELETE_TASK_REJECTED,
  COMPLETE_TASK_REJECTED,
  REOPEN_TASK_REJECTED
} from './constants';
import { Task } from '../models/Models'
import service from '../service'
import {reset} from 'redux-form'

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
        dispatch(reset('addTask'));
      })
      .catch((err: Error) => {
        dispatch({type: ADD_TASK_REJECTED, payload: err})
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
  return function(dispatch: any) {
    service.deleteTask(id)
      .then(() => {
        dispatch({type: DELETE_TASK, payload: id})
      })
      .catch((err: Error) => {
        dispatch({type: DELETE_TASK_REJECTED, payload: err})
      })
  }
}

export function completeTask(id: string) {
  return function(dispatch: any) {
    service.completeTask(id)
      .then(() => {
        dispatch({type: COMPLETE_TASK, payload: id})
      })
      .catch((err: Error) => {
        dispatch({type: COMPLETE_TASK_REJECTED, payload: err})
      })
  }
}

export function reopenTask(id: string) {
  return function(dispatch: any) {
    service.reopenTask(id)
      .then(() => {
        dispatch({type: REOPEN_TASK, payload: id})
      })
      .catch((err: Error) => {
        dispatch({type: REOPEN_TASK_REJECTED, payload: err})
      })
  }
}
