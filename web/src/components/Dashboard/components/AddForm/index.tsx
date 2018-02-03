import * as React from 'react'
import AddTaskForm from './Forms/AddTaskForm'
import { CSSProperties } from 'react'

// Redux
import { addTask } from '../../redux/actions'
import store from '../../../../redux/store'


interface IAddFormProps {
  style?: CSSProperties
}

export default class AddForm extends React.Component<IAddFormProps> {

  submit = (newTask: any) => {
    store.dispatch(addTask(newTask.title, newTask.description))
  }

  render() {
    return (
      <div style={this.props.style}>
        <AddTaskForm onSubmit={this.submit} />
      </div>
    )
  }
}
