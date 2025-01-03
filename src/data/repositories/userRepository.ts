import { IUserRepository } from "../../domain/repositories/iUserRepository";
import { User } from "../database/user"; // Modelo do ORM

export class UserRepository implements IUserRepository {
  async findById(id: string): Promise<any> {
    return await User.findById(id); // Exemplo usando ORM
  }
}
