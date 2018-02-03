import * as React from 'react'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { RaisedButton, TextField } from 'material-ui'
import Field from 'redux-form/lib/Field'
import style from './style'

export interface IAddTask {
  title: string,
  description: string
}

const renderTextField = (props: any) => (
  <TextField
    hintText={props.label}
    floatingLabelText={props.label}
    multiLine
    {...props}
    {...props.input}
  />
)

let AddTaskForm = (props: InjectedFormProps) => {

  return (
    <form onSubmit={props.handleSubmit} style={style.form}>
      <div>
        <Field name='title' label="Task title" component={renderTextField} style={style.field} />
      </div>
      <div>
        <Field name='description' label="Description" component={renderTextField} style={style.field} rows={4} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <RaisedButton type="submit" label="Add" labelColor="#FFF" backgroundColor="#4CAF50" />
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'addTask'
})(AddTaskForm)