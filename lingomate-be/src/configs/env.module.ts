import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { envSchema } from './env';
import { EnvService } from './env.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'test' ? '.env.template' : '.env',
      validate: (env) => envSchema.parse(env),
      isGlobal: false,
    }),
  ],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule {}
