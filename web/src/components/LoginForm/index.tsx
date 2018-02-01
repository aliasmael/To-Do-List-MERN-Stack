import * as React from 'react'
import Form from './components/LoginForm'

// Redux
import store from '../../redux/store'
import { login } from './redux/actions'

export default class LoginForm extends React.Component {

	// Handle login form submittion
	login(loginData: any) {
		store.dispatch(login(loginData.username, loginData.password))
	}

	// Render the component.
	render() {
		return (
			<Form
				onSubmit={this.login}
			/>
		)
	}

}