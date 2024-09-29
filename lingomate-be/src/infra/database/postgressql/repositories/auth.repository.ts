import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from '@src/application/interfaces/ireposiroties/auth.repository';
import { EnvService } from '@src/configs';
import { CreateUserDto, LoginDto } from '@src/core/dtos/user.dto';
import { UserEntity } from '@src/core/entities';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class PostgresAuthRepository implements AuthRepository {
  private readonly logger = new Logger(PostgresAuthRepository.name);
  constructor(
    private readonly jwtService: JwtService,
    private readonly envService: EnvService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({
      where: [{ username }, { email: username }],
    });
    if (user && bcrypt.compareSync(password, user.password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(input: LoginDto): Promise<any> {
    try {
      const user = await this.validateUser(input.username, input.password);
      if (!user) {
        throw new Error('User not found');
      }
      const payload = {
        username: user.username,
        sub: user.id,
      };
      return {
        accessToken: this.jwtService.sign(payload, {
          secret: this.envService.get('JWT_ACCESS_SECRET'),
          expiresIn: this.envService.get('JWT_ACCESS_EXPIRATION'),
        }),
        refreshToken: this.jwtService.sign(payload, {
          secret: this.envService.get('JWT_REFRESH_SECRET'),
          expiresIn: this.envService.get('JWT_REFRESH_EXPIRATION'),
        }),
      };
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }

  async register(user: CreateUserDto): Promise<any> {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(user.password, salt);
      const userToCreate = {
        ...user,
        password: hashPassword,
      };
      const result = await this.userRepository.save(userToCreate);
      return {
        id: result.id,
        username: result.username,
        email: result.email,
        fullName: result.fullName,
        avatar: result.avatar,
        phone: result.phone,
        address: result.address,
        birthDate: result.birthDate,
      };
    } catch (error) {
      this.logger.error(error.message);
      throw new Error('Error to create user');
    }
  }

  forgotPassword(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  resetPassword(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  changePassword(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  verifyEmail(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  resendEmailVerification(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  verifyPhone(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  resendPhoneVerification(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  logout(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async refreshToken(refreshToken: string): Promise<any> {
    try {
      const payload = await this.jwtService.verify(refreshToken, {
        secret: this.envService.get('JWT_REFRESH_SECRET'),
      });
      const accessToken = await this.jwtService.sign(payload, {
        secret: this.envService.get('JWT_ACCESS_SECRET'),
        expiresIn: this.envService.get('JWT_ACCESS_EXPIRATION'),
      });
      return {
        accessToken,
      };
    } catch (error) {
      this.logger.error(error.message);
      throw Error('Invalid refresh token');
    }
  }
}
