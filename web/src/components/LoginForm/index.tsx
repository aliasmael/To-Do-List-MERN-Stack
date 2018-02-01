import * as React from 'react'
import Form from './components/LoginForm'


export default class LoginForm extends React.Component {

	// Handle login form submittion
	login(loginData: any) {
		console.log(loginData)
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