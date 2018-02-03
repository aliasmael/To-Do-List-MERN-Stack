import config from './config'

// Import modules routes
import taskRouter from './modules/task/routes'
import authRouter from './modules/auth/routes'
import { Request, Response } from 'express'

const express = require('express');
const app = express();
const bodyParser = require('body-parser')


// Add headers
app.use(function (_: Request, res: Response, next: () => void) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://0.0.0.0:8001');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', 1);

	// Pass to next layer of middleware
	next();
});

// parse application/json
app.use(bodyParser.json())

// use task routes under /api/task
app.use('/api/task', taskRouter);

// use auth routes under /api/auth
app.use('/api/auth', authRouter);

// Handle error routes
app.use(function (_: Request, res: Response) {
	res.sendStatus(404);
});

// app listens on http://{{host}}:{{port}}
app.listen(config.port, config.host);