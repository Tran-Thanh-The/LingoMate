import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get('mail.host', { infer: true }),
          port: configService.get('mail.port', { infer: true }),
          ignoreTLS: configService.get('mail.ignoreTLS', { infer: true }),
          secure: configService.get('mail.secure', { infer: true }),
          requireTLS: configService.get('mail.requireTLS', { infer: true }),
          auth: {
            user: configService.get('mail.user', { infer: true }),
            pass: configService.get('mail.password', { infer: true }),
          },
        },
        defaults: {
          from: `"${configService.get('mail.defaultName', { infer: true }) || ''}" <${configService.get('mail.defaultEmail', { infer: true }) || ''}>`,
        },
        template: {
          dir: join(configService.get('app.workingDirectory', { infer: true }) || '', 'src', 'mail', 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
