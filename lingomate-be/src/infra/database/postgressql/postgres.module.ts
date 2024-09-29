import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from '@src/application/interfaces/ireposiroties/auth.repository';
import { EnvModule, EnvService } from '@src/configs';
import { PostgresAuthRepository } from './repositories/auth.repository';
import { UserEntity } from '@src/core/entities';
import { UserRepository } from '@src/application/interfaces/ireposiroties/user.repository';
import { PostgresUserRepository } from './repositories/user.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    EnvModule,
    TypeOrmModule.forRootAsync({
      imports: [EnvModule],
      useFactory: (envService: EnvService) => ({
        type: 'postgres',
        host: envService.get('DB_HOST'),
        port: parseInt(envService.get('DB_PORT'), 10),
        username: envService.get('DB_USERNAME'),
        password: envService.get('DB_PASSWORD'),
        database: envService.get('DB_NAME'),
        entities: [__dirname + '/../../**/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
      }),
      inject: [EnvService],
    }),
    JwtModule.registerAsync({
      imports: [EnvModule],
      useFactory: (envService: EnvService) => ({
        secret: envService.get('JWT_ACCESS_SECRET'),
        signOptions: { expiresIn: envService.get('JWT_ACCESS_EXPIRATION') },
      }),
      inject: [EnvService],
    }),
  ],
  providers: [
    {
      provide: AuthRepository,
      useClass: PostgresAuthRepository,
    },
    {
      provide: UserRepository,
      useClass: PostgresUserRepository,
    },
  ],
  exports: [AuthRepository, UserRepository],
})
export class PostgresModule {}
