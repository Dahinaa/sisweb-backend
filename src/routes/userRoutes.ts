import { Router, Request, Response } from 'express';

const userRouter: Router = Router();

// Get all users
userRouter.get('/', (req: Request, res: Response) => {
  res.send('Get a list of users');
});

// Get user by ID
userRouter.get('/:id', (req: Request, res: Response) => {
  res.send(`Get the user ${req.params.id}`);
});

// Create user
userRouter.post('/', (req: Request, res: Response) => {
  res.send(`Create a new user with ID: ${req.body.id}`);
});

// Update user
userRouter.patch('/:id', (req: Request, res: Response) => {
  res.send(
    `Update the user ${req.params.id} with the values of ${req.body.name}, ${req.body.email} and ${req.body.password}`
  );
});

// Delete user
userRouter.delete('/', (req: Request, res: Response) => {
  res.send(`Deleting the user ${req.body.id}`);
});

export default userRouter;