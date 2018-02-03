import * as React from 'react'
import { Task } from '../../models/Models'
import RaisedButton from 'material-ui/RaisedButton'
import style from './style'

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
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div>
            <b>{task.title}</b>
          </div>
          <div style={style.description}>
            {task.description}
          </div>
        </div>
        <div style={style.actionBtnsContainer}>
          {
            task.status == "NOTCOMPLETED"
              ? <RaisedButton primary style={style.actionBtn} label="Complete" onClick={() => this.props.onComplete(task._id)} />
              : <RaisedButton primary style={style.actionBtn} label="Reopen" onClick={() => this.props.onReopen(task._id)} />
          }
          <RaisedButton secondary style={style.actionBtn} label="Delete" onClick={() => this.props.onDelete(task._id)} />
        </div>
      </div>
    )
  }
}
