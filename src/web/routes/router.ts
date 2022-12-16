import * as express from 'express';
import { Request, Response } from 'express';

const Router = express.Router();
Router.get('/', (request: Request, response: Response) => {
  response.status(200).json({
    message: 'Ok',
  });
});

export { Router };
