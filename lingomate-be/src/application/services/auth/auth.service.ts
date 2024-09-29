import { Injectable } from '@nestjs/common';
import { AuthRepository } from '@src/application/interfaces/ireposiroties/auth.repository';
import { CreateUserDto, LoginDto } from '@src/core/dtos/user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepo: AuthRepository) {}

  async login(loginInput: LoginDto) {
    try {
      return await this.authRepo.login(loginInput);
    } catch (error) {
      throw error;
    }
  }

  async register(createUserDto: CreateUserDto) {
    try {
      return await this.authRepo.register(createUserDto);
    } catch (error) {
      throw new Error('Error to create user');
    }
  }

  async forgotPassword() {}

  async resetPassword() {}

  async changePassword() {}

  async verifyEmail() {}

  async resendEmailVerification() {}

  async verifyPhone() {}

  async resendPhoneVerification() {}

  async logout() {}

  async refreshToken(refreshToken: string) {
    try {
      return await this.authRepo.refreshToken(refreshToken);
    } catch (error) {
      throw error;
    }
  }
}
