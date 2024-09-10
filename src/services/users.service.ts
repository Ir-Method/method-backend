import { injectable } from 'inversify';

export interface IUserService {
  getAllUsers(): string[];
}

@injectable()
export class UserService implements IUserService {
  getAllUsers(): string[] {
    return ['Alice', 'Bob', 'Charlie', 'David'];
  }
}