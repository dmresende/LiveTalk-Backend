export interface IUserRepository {
  getById(id: string): Promise<any>;
}