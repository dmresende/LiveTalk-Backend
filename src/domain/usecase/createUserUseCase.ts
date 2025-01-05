import { IUserRepository } from "../../domain/repositories/iUserRepository";
import User from "../../domain/Entities/user";

class CreateUserUseCase {
  private iuserRepository: IUserRepository;

  constructor(iuserRepository: IUserRepository) {
    this.iuserRepository = iuserRepository;
  }

  async execute({ name, email, password }: User): Promise<User | null> {
    try {
      const existingUser = await this.iuserRepository.findByEmail(email);
      if (existingUser) {
        throw new Error("Usuário com este email já existe");
      }

      const newUser: User = await this.iuserRepository.create({
        name,
        email,
        password,
        photo: "",
      });

      return newUser;
    } catch (error) {
      throw error;
    }
  }
}

export default CreateUserUseCase;
