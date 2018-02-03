import { User } from '../../../models/Models'

export interface ILoginFormErrors {
	username: string,
	password: string,
	summary: string
}

export interface ILoginForm {
	[key: string]: any,
	username: string,
	password: string,
	isValid: boolean,
	errors: ILoginFormErrors
}

export interface IUserState {
	user: User,
	fetching: boolean,
	fetched: boolean,
	error: boolean,
	errorMessage: string
}

export interface ILoginResponse {
	token: string
}