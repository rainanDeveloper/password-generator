import * as express from 'express';
import { Request, Response } from 'express';
import { GeneratePasswordUseCase } from '../../../usecases/generate-password.use-case';

const PasswordRouter = express.Router();

PasswordRouter.get('/:length', (request: Request, response: Response) => {
  const { length } = request.params;

  if (length && !Number.isNaN(Number(length))) {
    const generatePasswordUseCase = new GeneratePasswordUseCase();

    const password = generatePasswordUseCase.execute({
      length: Number(length),
    });

    return response.status(200).json({
      message: 'Ok',
      password,
    });
  } else {
    return response.status(400).json({
      message: 'Error: the request is malformed',
    });
  }
});

export { PasswordRouter };
