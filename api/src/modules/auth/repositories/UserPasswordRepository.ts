import { MongoClient, ObjectId } from 'mongodb'
import config from './../../../config'
import { UserPassword } from '../models/UserPassword'

export default class MongoRepository {

	// MongoDb url
	dbUrl: string = config.mongoDb.url

	// Get all UserPasswords
	public findAll(): Promise<UserPassword[]> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('UserPasswords').find().toArray()
			}).then((items: any) => {
				return items
			})
	}

	// Find UserPassword by id
	public findOne(id: string): Promise<UserPassword> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('UserPasswords').findOne({ _id: new ObjectId(id) })
			}).then((item: any) => {
				return item
			})
	}

	// Insert new UserPassword
	public insert(UserPassword: UserPassword): Promise<UserPassword> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection("UserPasswords").insertOne(UserPassword)
			}).then(() => {
				return UserPassword
			})
	}

	// Delete UserPassword
	public delete(id: string): Promise<boolean> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('UserPasswords').remove({ userId: new ObjectId(id) })
			}).then((res: any) => {
				return (parseInt(res.result.n) > 0)
			})
	}

	// Update UserPassword
	public update(id: string, UserPassword: UserPassword): Promise<UserPassword> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('UserPasswords').updateOne({ _id: new ObjectId(id) }, UserPassword)
			}).then(() => {
				return UserPassword
			})
	}

	// Find UserPassword by username or email
	public findByUsernameOrEmail(username: string, email: string): Promise<UserPassword> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('UserPasswords').findOne({ username: username })
					|| db.collection('UserPasswords').findOne({ email: email })
			})
	}

	// Login by username and password
	public login(username: string, password: string): Promise<UserPassword> {
		return MongoClient.connect(this.dbUrl)
			.then((db: any) => {
				return db.collection('UserPasswords').findOne({ username: username, password: password })
			})
	}
}
