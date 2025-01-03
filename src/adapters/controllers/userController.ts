import { Request, Response } from 'express';
import { GetUserUseCase } from '../../domain/useCases/getUserUseCase';

export class UserController {
  constructor(private GetUserUseCase: GetUserUseCase) {}

  async getUser(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;
      const user = await this.GetUserUseCase.execute(id);
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
