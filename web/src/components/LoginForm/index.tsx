import * as React from 'react'
import Form from './components/LoginForm'
import { ILoginForm, ILoginFormErrors } from './models/Models'
import store from '../../redux/store'
import { login } from './redux/actions'

interface ILoginState {
	loginForm: ILoginForm
}

const initialForm: ILoginForm = {
	username: '',
	password: '',
	isValid: false,
	errors: {
		username: '',
		password: '',
		summary: ''
	}
}

const initialState: ILoginState = {
	loginForm: initialForm
}

export default class LoginForm extends React.Component<{}, ILoginState> {
	/**
	 * Class constructor.
	 */
	constructor(props: never) {
		super(props);

		this.state = initialState
		this.login = this.login.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	// Form validation
	validate() {
		let isValid: boolean = true
		let errors: ILoginFormErrors = {
			username: '',
			password: '',
			summary: ''
		}

		// validate username
		if (this.state.loginForm.username.trim() == '') {
			errors.username = 'This field is required'
			isValid = false
		}

		// validate password
		if (this.state.loginForm.password.trim() == '') {
			errors.password = 'This field is required'
			isValid = false
		}

		// Update state
		this.setState({
			...this.state,
			loginForm: {
				...this.state.loginForm,
				errors: errors,
				isValid: isValid
			}
		})

		return isValid
	}

	// Handle login form submittion
	login(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		// if form valid try login
		if (this.validate()) {
			// dispatch login action
			var username = this.state.loginForm.username;
			var password = this.state.loginForm.password;
			store.dispatch(login(username, password));
		}
	}

	// Handle changes in login form inputs
	onChange(e: React.FormEvent<HTMLInputElement>) {
		const field = e.currentTarget.name;
		const loginForm: ILoginForm = this.state.loginForm;
		loginForm[field] = e.currentTarget.value;


		// Update state
		this.setState({
			...this.state,
			loginForm: loginForm
		})
	}

	// Render the component.
	render() {
		return (
			<Form
				onSubmit={this.login}
				onChange={this.onChange}
				form={this.state.loginForm}
			/>
		)
	}

}