import * as React from 'react'
import { RemoteData } from '../../models/RemoteData'
import { Task } from './models/Models'
import { Row, Col } from 'antd/lib/grid'
import Stream from './components/Stream'
import AddForm from './components/AddForm'
import AppHeader from '../AppHeader'
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
			<Row style={style.streamWrapper}>
				<Col span={12}>
					<AppHeader />
					<AddForm />
					<hr style={{margin: 25}} />					
					<Stream tasks={tasks} />
				</Col>
			</Row>
		)
	}
}
