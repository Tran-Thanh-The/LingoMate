import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  email: string;
}

export class LoginDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

export interface UserDto {
  id?: string;
  username: string;
  email: string;
  fullName?: string;
  avatar?: string;
  phone?: string;
  address?: string;
  birthDate?: Date;
}

export class User implements UserDto {
  id?: string;
  username: string;
  email: string;
  fullName?: string;
  avatar?: string;
  phone?: string;
  address?: string;
  birthDate?: Date;

  constructor(user: UserDto) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.fullName = user.fullName;
    this.avatar = user.avatar;
    this.phone = user.phone;
    this.address = user.address;
    this.birthDate = user.birthDate;
  }
}
