import { IUserRepository } from "../../domain/repositories/iUserRepository";
import { User } from "../database/user";
import UserEntitie from "../../domain/Entities/user";

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<any> {
    try {
      const response = await User.findOne({ email });
      return response;
    } catch (error) {
      console.error("Erro ao buscar usuário pelo email:", error);
      throw new Error("Erro ao buscar usuário pelo email");
    }
  }

  async findAll(): Promise<UserEntitie[]> {
    return await User.find();
  }

  async create(data: UserEntitie): Promise<UserEntitie> {
    const newUser = new User(data);
    return await newUser.save();
  }

  async update(
    email: string,
    updateData: Partial<UserEntitie>
  ): Promise<UserEntitie | null> {
    return await User.findOneAndUpdate({ email }, updateData, { new: true });
  }

  async deleteByEmail(email: string): Promise<boolean> {
    const result = await User.findOneAndDelete({ email });
    return !!result;
  }
}
