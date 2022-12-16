import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as cors from 'cors';
import { Router } from './routes/router';

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use('/api', Router);
app.get('', (request: Request, response: Response) => {
  response.status(200).json({
    message: 'Ok',
  });
});

export { app };
