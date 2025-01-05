import express, { Request, Response } from "express";
import GetUserByIdUseCase from "../domain/usecase/getUserByIdUseCase";
import { UserRepository } from "../data/repositories/userRepository";
import CreateUserUseCase from "../domain/usecase/createUserUseCase";
import UpdateUserUseCase from "../domain/usecase/updateUserUseCase";
import GetAllUsersUseCase from "../domain/usecase/getAllUsersUseCase";
import DeleteUserByEmailUseCase from "../domain/usecase/deleteUserByEmailUseCase";

const router = express.Router();
const userRepository = new UserRepository();
const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
const createUserUseCase = new CreateUserUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const deleteUserByEmailUseCase = new DeleteUserByEmailUseCase(userRepository);

router.get("/users/:email", async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    const user = await getUserByIdUseCase.execute(email);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuário", error });
  }
});

router.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersUseCase.execute();
    if (users.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: "Nenhum usuário encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários", error });
  }
});

router.post("/user", async (req: Request, res: Response) => {
  try {
    const { name, email, password, photo } = req.body;

    const newUser = await createUserUseCase.execute({
      name,
      email,
      password,
      photo,
    });

    if (newUser) {
      res.status(201).json(newUser);
    } else {
      res.status(400).json({ message: "Erro ao criar usuário" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário", error });
  }
});

router.put("/user/:email", async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    const { name, password, photo } = req.body;

    const updatedUser = await updateUserUseCase.execute({
      email,
      name,
      password,
      photo,
    });

    console.log("🚀  updatedUser", updatedUser);

    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar usuário", error });
  }
});

router.delete("/users/:email", async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    const result = await deleteUserByEmailUseCase.execute(email);

    if (result) {
      res.status(200).json({ message: "Usuário deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar usuário", error });
  }
});

export default router;
