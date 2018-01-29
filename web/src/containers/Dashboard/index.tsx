import * as React from 'react'
import { RemoteData } from '../../models/RemoteData'
import { Task } from '../../components/Dashboard/models/Models'
import Dashboard from '../../components/Dashboard'

// Redux
import { connect } from 'react-redux'
import { Store } from '../../models/Models'

interface IDashboardProps {
  tasks: RemoteData<string, Task[]>
}

class DashboardPage extends React.Component<IDashboardProps> {
  render() {
    return (
      <Dashboard tasks={this.props.tasks} />
    )
  }
}

function select(state: Store): IDashboardProps {
  return {
    tasks: state.tasks.tasks,
  };
}
export default connect(select)(DashboardPage)