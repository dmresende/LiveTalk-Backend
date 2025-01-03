import User from "../Entities/user";

export interface IUserRepository {
  findById(userId: string): Promise<User | undefined>;
}
