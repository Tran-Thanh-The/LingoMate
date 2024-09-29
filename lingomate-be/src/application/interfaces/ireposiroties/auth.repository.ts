import { CreateUserDto, LoginDto } from '@src/core/dtos/user.dto';

export abstract class AuthRepository {
  abstract login(input: LoginDto): Promise<any>;
  abstract register(user: CreateUserDto): Promise<any>;
  abstract forgotPassword(): Promise<any>;
  abstract resetPassword(): Promise<any>;
  abstract changePassword(): Promise<any>;
  abstract verifyEmail(): Promise<any>;
  abstract resendEmailVerification(): Promise<any>;
  abstract verifyPhone(): Promise<any>;
  abstract resendPhoneVerification(): Promise<any>;
  abstract logout(): Promise<any>;
  abstract refreshToken(refreshToken: string): Promise<any>;
}
