import { User } from '@src/core/dtos/user.dto';
import { GetListRequest } from '@src/core/requests/common/get-list-request';

export abstract class UserRepository {
  abstract create(user: User): Promise<User>;
  abstract findById(id: string): Promise<User | null>;
  abstract findByUsernameOrEmail(email: string): Promise<User | null>;
  abstract update(user: User): Promise<User>;
  abstract delete(id: string): Promise<void>;
  abstract findAllWithPagination(query: GetListRequest): Promise<User[]>;
}
