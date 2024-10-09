import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { I18nContext } from 'nestjs-i18n';
import { AllConfigType } from '../config/config.type';
import { MailData } from './interfaces/mail-data.interface';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService<AllConfigType>,
  ) {}

  async sendMail({
    templatePath,
    context,
    ...mailOptions
  }: {
    to: string;
    subject: string;
    templatePath: string;
    context: Record<string, unknown>;
  }): Promise<void> {
    const template = templatePath.split('/').pop()?.split('.')[0];

    await this.mailerService.sendMail({
      ...mailOptions,
      template,
      context,
    });
  }

  async userSignUp(mailData: MailData<{ hash: string }>): Promise<void> {
    const i18n = I18nContext.current();
    let emailConfirmTitle = '';
    let text1 = '';
    let text2 = '';
    let text3 = '';

    if (i18n) {
      [emailConfirmTitle, text1, text2, text3] = await Promise.all([
        i18n.t("common.confirmEmail"),
        i18n.t("confirm-email.text1"),
        i18n.t("confirm-email.text2"),
        i18n.t("confirm-email.text3"),
      ]);
    }

    const url = new URL(
      this.configService.getOrThrow("app.frontendDomain", { infer: true }) + "/confirm-email",
    );
    url.searchParams.set("hash", mailData.data.hash);

    await this.sendMail({
      to: mailData.to,
      subject: emailConfirmTitle,
      templatePath: 'activation',
      context: {
        title: emailConfirmTitle,
        url: url.toString(),
        actionTitle: emailConfirmTitle,
        app_name: this.configService.get("app.name", { infer: true }),
        text1,
        text2,
        text3,
      },
    });
  }

  async forgotPassword(
    mailData: MailData<{ hash: string; tokenExpires: number }>,
  ): Promise<void> {
    const i18n = I18nContext.current();
    let resetPasswordTitle = '';
    let text1 = '';
    let text2 = '';
    let text3 = '';
    let text4 = '';

    if (i18n) {
      [resetPasswordTitle, text1, text2, text3, text4] = await Promise.all([
        i18n.t("common.resetPassword"),
        i18n.t("reset-password.text1"),
        i18n.t("reset-password.text2"),
        i18n.t("reset-password.text3"),
        i18n.t("reset-password.text4"),
      ]);
    }

    const url = new URL(
      this.configService.getOrThrow("app.frontendDomain", { infer: true }) + "/password-change",
    );
    url.searchParams.set("hash", mailData.data.hash);
    url.searchParams.set("expires", mailData.data.tokenExpires.toString());

    await this.sendMail({
      to: mailData.to,
      subject: resetPasswordTitle,
      templatePath: 'reset-password',
      context: {
        title: resetPasswordTitle,
        url: url.toString(),
        actionTitle: resetPasswordTitle,
        app_name: this.configService.get("app.name", { infer: true }),
        text1,
        text2,
        text3,
        text4,
      },
    });
  }

  async confirmNewEmail(mailData: MailData<{ hash: string }>): Promise<void> {
    const i18n = I18nContext.current();
    let emailConfirmTitle = '';
    let text1 = '';
    let text2 = '';
    let text3 = '';

    if (i18n) {
      [emailConfirmTitle, text1, text2, text3] = await Promise.all([
        i18n.t("common.confirmEmail"),
        i18n.t("confirm-new-email.text1"),
        i18n.t("confirm-new-email.text2"),
        i18n.t("confirm-new-email.text3"),
      ]);
    }

    const url = new URL(
      this.configService.getOrThrow("app.frontendDomain", { infer: true }) + "/confirm-new-email",
    );
    url.searchParams.set("hash", mailData.data.hash);

    await this.sendMail({
      to: mailData.to,
      subject: emailConfirmTitle,
      templatePath: 'confirm-new-email',
      context: {
        title: emailConfirmTitle,
        url: url.toString(),
        actionTitle: emailConfirmTitle,
        app_name: this.configService.get("app.name", { infer: true }),
        text1,
        text2,
        text3,
      },
    });
  }
}
