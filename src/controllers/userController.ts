import express, { Request, Response } from "express";
import GetUserByIdUseCase from "../domain/usecase/getUserByIdUseCase";
import { UserRepository } from "../data/repositories/userRepository";

const router = express.Router();
const userRepository = new UserRepository();
const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);

router.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await getUserByIdUseCase.execute(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuário", error });
  }
});

export default router;
