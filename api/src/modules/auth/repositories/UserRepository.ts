import { MongoClient, ObjectId } from 'mongodb'
import config from './../../../config'
import { User } from '../models/User'

export default class MongoRepository {

	// MongoDb url
	dbUrl: string = config.mongoDb.url

	// Get all Users
	public findAll(): Promise<User[]> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('Users').find().toArray()
			}).then((items: any) => {
				return items
			})
	}

	// Find User by id
	public findOne(id: string): Promise<User> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('Users').findOne({ _id: new ObjectId(id) })
			}).then((item: any) => {
				return item
			})
	}

	// Insert new User
	public insert(User: User): Promise<User> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection("Users").insertOne(User)
			}).then(() => {
				return User
			})
	}

	// Delete User
	public delete(id: string): Promise<boolean> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('Users').remove({ _id: new ObjectId(id) })
			}).then((res: any) => {
				return (parseInt(res.result.n) > 0)
			})
	}

	// Update User
	public update(id: string, User: User): Promise<User> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('Users').updateOne({ _id: new ObjectId(id) }, User)
			}).then(() => {
				return User
			})
	}
}
