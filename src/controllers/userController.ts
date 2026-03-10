import { RequestHandler, Request, Response } from 'express';

export const getAllUsers: RequestHandler = (req: Request, res: Response) => {
  res.send('Get a list of users');
};

export const getUserById: RequestHandler = (req: Request, res: Response) => {
  res.send(`Get the user ${req.params.id}`);
};

export const createUser: RequestHandler = (req: Request, res: Response) => {
  res.send(`Create a new user with ID: ${req.body.id}`);
};

export const modifyUser: RequestHandler = (req: Request, res: Response) => {
  res.send(
    `Update the user ${req.params.id} with the values of ${req.body.name}, ${req.body.email} and ${req.body.password}`
  );
};

export const deleteUser: RequestHandler = (req: Request, res: Response) => {
  res.send(`Deleting the user ${req.body.id}`);
};