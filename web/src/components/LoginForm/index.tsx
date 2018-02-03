import * as React from 'react'
import Form from './components/LoginForm'

// Redux
import store from '../../redux/store'
import { login } from './redux/actions'

interface ILoginFormProps {
	submitFailed: boolean,
	error: string
}

export default class LoginForm extends React.Component<ILoginFormProps> {

	// Handle login form submittion
	login(loginData: any) {
		store.dispatch(login(loginData.username, loginData.password))
	}

	// Render the component.
	render() {
		return (
			<div>
				{
					this.props.submitFailed ?
						<span style={{
							display: 'flex',
							justifyContent: 'center',
							color: "#F44336"
						}}>{this.props.error}</span>
						: ''
				}
				<Form
					onSubmit={this.login}
				/>
			</div>
		)
	}

}