import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '@src/application/interfaces/ireposiroties/user.repository';
import { User } from '@src/core/dtos/user.dto';
import { UserEntity } from '@src/core/entities';
import { GetListRequest } from '@src/core/requests/common/get-list-request';
import { Repository } from 'typeorm';

@Injectable()
export class PostgresUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  create(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  async findByUsernameOrEmail(data: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: [{ username: data }, { email: data }],
    });
  }
  update(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findAllWithPagination(query: GetListRequest): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
