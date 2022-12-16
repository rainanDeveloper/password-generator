import * as express from 'express';
import { Request, Response } from 'express';
import { PasswordRouter } from './password/password.router';

const Router = express.Router();

Router.use('/password', PasswordRouter);
Router.get('/', (request: Request, response: Response) => {
  response.status(200).json({
    message: 'Ok',
  });
});

export { Router };
