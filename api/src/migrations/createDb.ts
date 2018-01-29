import config from '../config'
import { MongoClient } from 'mongodb'

class CreateDb {

	// Run migration when declearing CreateDb class
	constructor() {
		let url = config.mongoDb.url

		MongoClient.connect(url, function (err: any, db: any) {
			if (err) throw err;
			console.log("Database created!");
			db.close();
		});
	}

}

new CreateDb();