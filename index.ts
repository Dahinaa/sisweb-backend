import 'reflect-metadata';
import express, { Express } from 'express';
import morgan from 'morgan';
import apiRouter from './src/routes';
import { sequelize } from './src/connection/connection';

const app: Express = express();
const port: number = 3000;

app.use(morgan('dev'));
app.use(express.json());

app.use(apiRouter);

sequelize.sync()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err: unknown) => {
    console.log("Database error:", err);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});