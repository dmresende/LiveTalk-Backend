import { IUserRepository } from '../../domain/interfaces/userRepository';
import { User } from '../database/User'; // Modelo do ORM

export class UserRepository implements IUserRepository {
  async getById(id: string): Promise<any> {
    return await User.findById(id); // Exemplo usando ORM
  }
}