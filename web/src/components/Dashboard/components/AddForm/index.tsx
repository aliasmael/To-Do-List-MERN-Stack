import * as React from 'react'
import AddTaskForm from './Forms/AddTaskForm'

// Redux
import { addTask } from '../../redux/actions'
import store from '../../../../redux/store'

export default class AddForm extends React.Component {

  submit = (newTask: any) => {
    store.dispatch(addTask(newTask.title, newTask.description))
    console.log(newTask)
  }
  
  render() {
    return <AddTaskForm onSubmit={this.submit} />
  }
}
