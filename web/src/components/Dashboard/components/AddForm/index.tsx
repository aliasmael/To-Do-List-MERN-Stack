import * as React from 'react'
import { Button, Input } from 'antd'

export default class AddForm extends React.Component {

  render() {
    return (
      <div>
        <Input placeholder="Task title" />
        <div style={{ margin: '24px 0' }} />
        <Input.TextArea placeholder="Insert description" autosize={{ minRows: 2, maxRows: 6 }} />
        <div style={{ margin: '24px 0' }} />

        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button type="primary" style={{backgroundColor: '#5bb85c'}}>Add</Button>
        </div>
      </div>
    )
  }
}
