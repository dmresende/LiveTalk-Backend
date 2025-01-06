import User from "../Entities/user";

export interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  create(data: User): Promise<User>;
  update(email: string, updateData: Partial<User>): Promise<User | null>;
  deleteByEmail(email: string): Promise<boolean>;
}
