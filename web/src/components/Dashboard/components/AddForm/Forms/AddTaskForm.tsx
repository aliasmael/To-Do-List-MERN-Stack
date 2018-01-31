import * as React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'antd'

const { TextField } = require('redux-form-antd')

export interface IAddTask {
  title: string,
  description: string
}

interface IProps {
  handleSubmit: any
}

let AddTaskForm = (props: IProps) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Task title</label>
        <Field name="title" component={TextField} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <Field name="description" component={TextField} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button type="primary" htmlType="submit" style={{backgroundColor: '#5bb85c'}}>Add</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'addTask'
})(AddTaskForm)