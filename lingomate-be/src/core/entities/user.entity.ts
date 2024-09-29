import { BaseEntityExtended } from '@src/core/entities/base';
import { Column, Entity } from 'typeorm';
import { Role } from '../constants/role';

@Entity('user')
export class UserEntity extends BaseEntityExtended {
  @Column({
    unique: true,
  })
  username: string;
  @Column()
  password: string;
  @Column({
    unique: true,
  })
  email: string;
  @Column({
    name: 'full_name',
    nullable: true,
  })
  fullName: string;
  @Column({
    nullable: true,
  })
  avatar: string;
  @Column({
    nullable: true,
  })
  phone: string;
  @Column({
    nullable: true,
  })
  address: string;
  @Column({
    name: 'birth_date',
    nullable: true,
  })
  birthDate: Date;
  @Column({
    name: 'role',
    enum: Role,
    default: Role.USER,
    type: 'enum',
  })
  role: Role;
}
