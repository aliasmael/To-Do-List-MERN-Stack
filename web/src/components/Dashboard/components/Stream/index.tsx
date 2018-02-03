import * as React from 'react'
import { RemoteData } from '../../../../models/RemoteData'
import { Task } from '../../models/Models'
import { CSSProperties } from 'react'
import Card from '../../components/Card'
import style from './style'

// Redux
import { deleteTask, completeTask, reopenTask } from '../../redux/actions'
import store from '../../../../redux/store'

interface IDashboardProps {
	tasks: RemoteData<string, Task[]>,
	style?: CSSProperties
}

export default class Dashboard extends React.Component<IDashboardProps> {

	deleteTask = (id: string) => {
		store.dispatch(deleteTask(id))
	}

	completeTask = (id: string) => {
		store.dispatch(completeTask(id))
	}

	reopenTask = (id: string) => {
		store.dispatch(reopenTask(id))
	}

	render() {
		const { tasks } = this.props;

		switch (tasks.kind) {
			case "NotAsked":
				return ""

			case "Loading":
				return (
					<div style={style.loaderWrapper}>
						Loading
					</div>
				)

			case "Failure":
				return tasks.error

			case "Success":
				return (
					<div style={this.props.style}>
						{
							tasks.data.length > 0 ?
								tasks.data.map((task: Task) => (
									<Card
										key={task._id}
										task={task}
										onDelete={this.deleteTask}
										onComplete={this.completeTask}
										onReopen={this.reopenTask}
									/>
								))
								:
								"No tasks added yet"
						}
					</div>
				)
		}
	}
}
