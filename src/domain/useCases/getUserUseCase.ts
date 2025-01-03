import { IUserRepository } from '../interfaces/userRepository';

export class GetUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}
