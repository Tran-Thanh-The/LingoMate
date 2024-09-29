import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from '@src/application/services/auth/auth.service';
import { PostgresModule } from 'src/infra/database/postgressql/postgres.module';
import { PassportModule } from '@nestjs/passport';
import { EnvModule, EnvService } from '@src/configs';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  imports: [
    PostgresModule,
    PassportModule,
    EnvModule,
    JwtModule.registerAsync({
      imports: [EnvModule],
      useFactory: (envService: EnvService) => ({
        secret: envService.get('JWT_ACCESS_SECRET'),
        signOptions: { expiresIn: envService.get('JWT_ACCESS_EXPIRATION') },
      }),
      inject: [EnvService],
    }),
  ],
})
export class AuthModule {}
