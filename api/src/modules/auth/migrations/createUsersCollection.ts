import config from '../../../config'
import { MongoClient } from 'mongodb'

class CreateCollection {

	// Run migration when declearing CreateDb class
	constructor() {
		let url = config.mongoDb.url

		MongoClient.connect(url, function (err: Error, db: any) {
			if (err) throw err
			db.createCollection("Users", function (err: Error) {
				if (err) throw err
				console.log("Collection created!")
				db.close()
			})
		})
	}

}

new CreateCollection()