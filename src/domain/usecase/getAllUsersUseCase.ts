import { IUserRepository } from "../../domain/repositories/iUserRepository";
import User from "../../domain/Entities/user";

class GetAllUsersUseCase {
  private iuserRepository: IUserRepository;

  constructor(iuserRepository: IUserRepository) {
    this.iuserRepository = iuserRepository;
  }

  async execute(): Promise<User[]> {
    try {
      return await this.iuserRepository.findAll();
    } catch (error) {
      throw new Error(`Erro ao buscar usuários: ${error}`);
    }
  }
}

export default GetAllUsersUseCase;
