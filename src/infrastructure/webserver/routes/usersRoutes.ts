import { Router } from 'express';
import { asyncHandler } from '../middlewares/asyncHandler';
import { UserController } from '../../../adapters/controllers/userController';

export const userRouter = (usuarioController: UserController): Router => {
  const router = Router();

  router.get('/:id', asyncHandler((req, res) => usuarioController.getUser(req, res)));

  return router;
};
