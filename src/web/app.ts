import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as cors from 'cors';
import { Router } from './routes/router';
import { join } from 'path';

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use('/api', Router);
app.use('', express.static(join(process.cwd(), 'public')));

export { app };
