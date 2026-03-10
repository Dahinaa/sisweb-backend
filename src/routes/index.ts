import { Router, Request, Response } from 'express';
import userRoutes from './userRoutes';

const apiRouter: Router = Router();

apiRouter.use('/user', userRoutes);

apiRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello Typescript!');
});

export default apiRouter;