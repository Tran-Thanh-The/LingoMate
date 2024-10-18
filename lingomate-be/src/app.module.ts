import { Module } from "@nestjs/common";
import { UsersModule } from "@/domain/users/users.module";
import { FilesModule } from "./files/files.module";
import { AuthModule } from "@/domain/auth/auth.module";
import databaseConfig from "./database/config/database.config";
import authConfig from "@/domain/auth/config/auth.config";
import appConfig from "./config/app.config";
import mailConfig from "./mail/config/mail.config";
import fileConfig from "./files/config/file.config";
import path from "path";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { I18nModule } from "nestjs-i18n/dist/i18n.module";
import { HeaderResolver } from "nestjs-i18n";
import { TypeOrmConfigService } from "./database/typeorm-config.service";
import { MailModule } from "./mail/mail.module";
import { HomeModule } from "@/domain/home/home.module";
import { DataSource, DataSourceOptions } from "typeorm";
import { AllConfigType } from "./config/config.type";
import { SessionModule } from "@/domain/session/session.module";
import { MailerModule } from "./mailer/mailer.module";

const infrastructureDatabaseModule = TypeOrmModule.forRootAsync({
  useClass: TypeOrmConfigService,
  dataSourceFactory: async (options: DataSourceOptions) => {
    return new DataSource(options).initialize();
  },
});

import { QuestionsModule } from "@/domain/questions/questions.module";

import { AnswersModule } from "@/domain/answers/answers.module";

import { CoursesModule } from "@/domain/courses/courses.module";

import { LessonsModule } from "@/domain/lessons/lessons.module";

import { PracticeExercisesModule } from "@/domain/practice-exercises/practice-exercises.module";

import redisConfig from "@/common/redis/config/redis.config";
import { RedisModule } from "@/common/redis/redis.module";
import { HttpModule } from "@nestjs/axios";
import { InvoicesModule } from "./domain/invoices/invoices.module";

import { CategoriesModule } from "@/domain/categories/categories.module";

@Module({
  imports: [
    CategoriesModule,
    HttpModule,
    InvoicesModule,
    PracticeExercisesModule,
    LessonsModule,
    CoursesModule,
    AnswersModule,
    QuestionsModule,
    UsersModule,
    FilesModule,
    AuthModule,
    SessionModule,
    MailModule,
    MailerModule,
    HomeModule,
    RedisModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        databaseConfig,
        authConfig,
        appConfig,
        mailConfig,
        fileConfig,
        redisConfig,
      ],
      envFilePath: [".env"],
    }),
    infrastructureDatabaseModule,
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService<AllConfigType>) => ({
        fallbackLanguage: configService.getOrThrow("app.fallbackLanguage", {
          infer: true,
        }),
        loaderOptions: { path: path.join(__dirname, "/i18n/"), watch: true },
      }),
      resolvers: [
        {
          use: HeaderResolver,
          useFactory: (configService: ConfigService<AllConfigType>) => {
            return [
              configService.get("app.headerLanguage", {
                infer: true,
              }),
            ];
          },
          inject: [ConfigService],
        },
      ],
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),
  ],
})
export class AppModule {}
