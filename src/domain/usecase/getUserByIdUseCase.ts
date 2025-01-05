import { IUserRepository } from "../repositories/iUserRepository";

export default class GetUserByIdUseCase {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(email: string) {
    return await this.userRepository.findByEmail(email);
  }
}
