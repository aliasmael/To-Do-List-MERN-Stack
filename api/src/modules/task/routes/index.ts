import * as express from 'express'
import { Response, Request } from 'express'
import service from '../services'
import { Task } from '../models/Task';

let router = express.Router()

// Default get route
router.get('/', (_: Request, res: Response) => {

	// Get all tasks
	service.findAll()
		.then((tasks: Task[]) => {
			res.status(200).json(tasks)
		}).catch((err: Error) => {
			res.status(400).json(err.message)
		})
});

// Default post route
router.post('/', (req: Request, res: Response) => {

	// Add new task
	Task.vaidateInsertRequest(req.body)
		.then((task: Task) => {
			service.add(task)
				.then((task: Task) => {
					res.status(200).json(task)
				}).catch((err: Error) => {
					res.status(400).json(err.message)
				})
		}).catch((err: Error) => {
			res.status(400).json(err.message)
		})
});

// Default post route
router.delete('/:id', (req: Request, res: Response) => {

	service.delete(req.params.id)
		.then((deleted: boolean) => {
			if (deleted)
				res.sendStatus(200)
			else
				res.sendStatus(404)
		}).catch((err: Error) => {
			res.status(400).json(err.message)
		})
});

// Complete task route
router.put('/:id/complete', (req: Request, res: Response) => {

	service.complete(req.params.id)
		.then((_: Task) => {
			res.sendStatus(200)
		}).catch((err: Error) => {
			res.status(400).json(err.message)
		})
});

// Reopen task route
router.put('/:id/reopen', (req: Request, res: Response) => {

	service.reopen(req.params.id)
		.then((_: Task) => {
			res.sendStatus(200)
		}).catch((err: Error) => {
			res.status(400).json(err.message)
		})
});

export default router