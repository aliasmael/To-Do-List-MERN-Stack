import { MongoClient, ObjectId } from 'mongodb'
import IRepository from './IRepository'
import config from './../../../config'
import { Task } from '../models/Task'

export default class MongoRepository implements IRepository {

	// MongoDb url
	dbUrl: string = config.mongoDb.url

	// Get all tasks
	public findAll(): Promise<Task[]> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('tasks').find().toArray()
			}).then((items: any) => {
				return items
			})
	}

	// Find task by id
	public findOne(id: string): Promise<Task> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('tasks').findOne({ _id: new ObjectId(id) })
			}).then((item: any) => {
				return item
			})
	}

	// Add new task
	public add(task: Task): Promise<Task> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection("tasks").insertOne(task)
			}).then(() => {
				return task
			})
	}

	// Delete task
	public delete(id: string): Promise<boolean> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('tasks').remove({ _id: new ObjectId(id) })
			}).then((res: any) => {
				return (parseInt(res.result.n) > 0)
			})
	}

	// Update task
	public update(id: string, task: Task): Promise<Task> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('tasks').updateOne({ _id: new ObjectId(id) }, task)
			}).then(() => {
				return task
			})
	}
}
