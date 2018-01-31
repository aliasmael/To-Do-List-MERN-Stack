import * as React from 'react'
import { Task } from '../../models/Models'
import { Button, List } from 'antd'

interface ITaskCardProps {
  task: Task,
  onDelete: (id: string) => void
  onComplete: (id: string) => void
  onReopen: (id: string) => void
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

        {
          task.status == "NOTCOMPLETED" 
            ? <Button type='primary' style={{ marginRight: 5, width: 90 }} onClick={() => this.props.onComplete(task._id)}>Complete</Button>
            : <Button type='primary' style={{ marginRight: 5, width: 90 }} onClick={() => this.props.onReopen(task._id)}>Reopen</Button>
        }
        <Button type="danger" onClick={() => this.props.onDelete(task._id)}>Delete</Button>
      </List.Item>
    )
  }
}
