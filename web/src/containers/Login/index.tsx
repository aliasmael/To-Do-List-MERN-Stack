import * as React from 'react'
import LoginForm from '../../components/LoginForm'
import { Row, Col } from 'antd/lib/grid'
import { connect } from 'react-redux'
import { Store, User } from '../../models/Models'

interface ILoginPageProps {
	user: User,
	history?: any
}

class LoginPage extends React.Component<ILoginPageProps> {

	componentDidMount() {
		const { user, history } = this.props;

		// if already user logged in redirect to dashboard
		if (!user.isGuest) {
			history.push('/dashboard')
		}
	}

	componentDidUpdate() {
		const { user, history } = this.props;

		// if already user logged in redirect to dashboard
		if (!user.isGuest) {
			history.push('/dashboard')
		}
	}

	render() {
		return (
			<Row>
				<Col offset={10} span={4}>
					<LoginForm />
				</Col>
			</Row>
		)
	}

}

function select(state: Store): ILoginPageProps {
	return {
		user: state.user.user
	};
}
export default connect(select)(LoginPage);