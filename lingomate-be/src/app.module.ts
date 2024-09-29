import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvModule } from './configs/env.module';
import { LoggerMiddleware } from './application/middlewares/logger.middleware';
import { DatabaseModule } from './infra/database/database.module';
import { AuthModule } from './application/api/auth/auth.module';
import { UserModule } from './application/api/user/user.module';
import { UserService } from './application/services/user/user.service';
import { AuthService } from './application/services/auth/auth.service';

@Module({
  imports: [
    EnvModule,
    DatabaseModule.register({
      type: 'postgres',
      global: true,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
