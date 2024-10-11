import { Module } from "@nestjs/common";
import { QuestionRepository } from "../question.repository";
import { QuestionRelationalRepository } from "./repositories/question.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionEntity } from "./entities/question.entity";

@Module({
  imports: [TypeOrmModule.forFeature([QuestionEntity])],
  providers: [
    {
      provide: QuestionRepository,
      useClass: QuestionRelationalRepository,
    },
  ],
  exports: [QuestionRepository],
})
export class RelationalQuestionPersistenceModule {}
