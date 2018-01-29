import * as React from 'react'
import { ILoginForm } from '../../models/Models'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import style from './style'
const FormItem = Form.Item

interface ILoginFormProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
	onChange: (e: React.FormEvent<HTMLInputElement>) => void,
	form: ILoginForm
}

export default class LoginForm extends React.Component<ILoginFormProps> {

	render() {
		const { onSubmit, onChange, form } = this.props

		return (
			<Form onSubmit={onSubmit} className="login-form" style={style.form}>
				<FormItem
					validateStatus={form.errors.username ? 'error' : 'success'}
					required
				>
					<Input
						prefix={
							<Icon
								type="user"
								style={{ color: 'rgba(0,0,0,.25)' }}
							/>
						}
						placeholder="Username"
						name="username"
						onChange={onChange}
						value={form.username}
						style={style.textInput}
					/>
				</FormItem>
				<FormItem
					validateStatus={form.errors.password ? 'error' : 'success'}
					required
				>
					<Input
						prefix={
							<Icon
								type="lock"
								style={{ color: 'rgba(0,0,0,.25)' }}
							/>
						}
						type="password"
						placeholder="Password"
						name="password"
						onChange={onChange}
						value={form.password}
						style={style.textInput}
					/>
				</FormItem>
				<FormItem>
					<Checkbox>Remember me</Checkbox>
					<a
						className="login-form-forgot"
						href=""
						style={style.forgetPassword}
					>
						Forgot password
					</a>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
						style={style.submitBtn}
					>
						Log in
					</Button>
					Or <a href="">register now!</a>
				</FormItem>
			</Form>
		)
	}

}
