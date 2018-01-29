import * as React from 'react'
import { Task } from '../../models/Models'
import { Button, List } from 'antd'

interface ITaskCardProps {
  task: Task
}


export default class TaskCard extends React.Component<ITaskCardProps> {

  render() {
    const { task } = this.props;
    return (
      <List.Item>
        <List.Item.Meta
          title={task.title}
          description={task.description}
        />

        <Button type='primary' style={{ marginRight: 5, width: 90 }}>
          {
            task.status == "NOTCOMPLETED" ?
              'Complete'
              : 'Reopen'
          }
        </Button>
        <Button type="danger">Delete</Button>
      </List.Item>
    )
  }
}
