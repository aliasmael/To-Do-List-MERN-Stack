import * as React from 'react'
import { RemoteData } from '../../models/RemoteData'
import { Task } from './models/Models'
import Stream from './components/Stream'
import AddForm from './components/AddForm'
import AppHeader from '../AppHeader'
import Divider from 'material-ui/Divider'
import style from './style'

// Redux
import { fetchTasks } from './redux/actions'
import store from '../../redux/store'

interface IDashboardProps {
	tasks: RemoteData<string, Task[]>
}


export default class Dashboard extends React.Component<IDashboardProps> {

	componentWillMount() {
		store.dispatch(fetchTasks())
	}

	render() {
		const { tasks } = this.props;
		return (
			<div style={{ display: 'flex', 'flexDirection': 'column', justifyContent: 'center' }}>
				<AppHeader />
				<AddForm style={style.addForm} />
				<Divider style={style.divider} />
				<Stream tasks={tasks} style={style.stream} />
			</div>
		)
	}
}
