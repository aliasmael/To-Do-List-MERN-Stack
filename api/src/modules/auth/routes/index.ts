import * as express from 'express'
import { Response, Request } from 'express'
import service from '../services'
import { UserPassword, RegeistrationRequest, LoginRequest } from '../models/UserPassword';
import { User } from '../models/User';

let router = express.Router()

// Registration route
router.post('/register', (req: Request, res: Response) => {

	// Register
	UserPassword.validateRegisterationRequest(req.body)
		.then((registrationRequest: RegeistrationRequest) => {
			service.register(registrationRequest)
				.then((user: User) => {
					res.status(200).json(user)
				}).catch((err: Error) => {
					res.status(400).json(err)
				})
		}).catch((err: Error) => {
			res.status(400).json(err)
		})
});


// Login route
router.post('/login', (req: Request, res: Response) => {

	// Login
	UserPassword.validateLoginRequest(req.body)
		.then((loginRequest: LoginRequest) => {
			service.login(loginRequest.username, loginRequest.password)
				.then((user: User) => {
					res.status(200).json(user)
				}).catch((err: Error) => {
					res.status(400).json(err)
				})
		}).catch((err: Error) => {
			res.status(400).json(err)
		})
});

// Get all users
router.get('/users', (_req: Request, res: Response) => {

	// Get all users
	service.findAll()
		.then((users: User[]) => {
			res.status(200).json(users)
		}).catch((err: Error) => {
			res.status(400).json(err.message)
		})
});

// Delete user
router.delete('/user/:id', (req: Request, res: Response) => {

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

export default router