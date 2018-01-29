import { RemoteData } from '../../../models/RemoteData'

export interface Task {
	_id: string,
	title: string,
	description: string,
	status: 'COMPLETED' | 'NOTCOMPLETED'
}

export interface IDashboardState {
	tasks: RemoteData<string, Task[]>
}