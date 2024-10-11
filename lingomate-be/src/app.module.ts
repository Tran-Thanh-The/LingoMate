import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { FilesModule } from "./files/files.module";
import { AuthModule } from "./auth/auth.module";
import databaseConfig from "./database/config/database.config";
import authConfig from "./auth/config/auth.config";
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
import { HomeModule } from "./home/home.module";
import { DataSource, DataSourceOptions } from "typeorm";
import { AllConfigType } from "./config/config.type";
import { SessionModule } from "./session/session.module";
import { MailerModule } from "./mailer/mailer.module";
// import { AnswersModule } from "./modules/answers/answers.module";
// import { QuestionsModule } from "./modules/questions/questions.module";
// import { ExercisesModule } from "./modules/exercises/exercises.module";
// import { LessonsModule } from "./modules/lessons/lessons.module";
// import { InvoicesModule } from './modules/invoices/invoices.module';
// import { PracticeExercisesModule } from './modules/practice-exercises/practice-exercises.module';

const infrastructureDatabaseModule = TypeOrmModule.forRootAsync({
  useClass: TypeOrmConfigService,
  dataSourceFactory: async (options: DataSourceOptions) => {
    return new DataSource(options).initialize();
  },
});

import { QuestionsModule } from "./questions/questions.module";

import { AnswersModule } from "./answers/answers.module";

import { CoursesModule } from "./courses/courses.module";

import { LessonsModule } from "./lessons/lessons.module";

import { ExercisesModule } from "./exercises/exercises.module";

import { PracticeExercisesModule } from "./practice-exercises/practice-exercises.module";

import { InvoicesModule } from "./invoices/invoices.module";

@Module({
  imports: [
    InvoicesModule,
    PracticeExercisesModule,
    ExercisesModule,
    LessonsModule,
    CoursesModule,
    AnswersModule,
    QuestionsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig, appConfig, mailConfig, fileConfig],
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
    UsersModule,
    FilesModule,
    AuthModule,
    SessionModule,
    MailModule,
    MailerModule,
    HomeModule,
    // LessonsModule,
    // ExercisesModule,
    // QuestionsModule,
    // AnswersModule,
    // InvoicesModule,
    // PracticeExercisesModule,
  ],
})
export class AppModule {}
