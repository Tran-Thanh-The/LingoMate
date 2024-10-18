import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionLessonRepository } from "../question-lesson.repository";
import { QuestionLessonEntity } from "./entities/question-lesson.entity";
import { QuestionLessonRelationalRepository } from "./repositories/question-lesson.repository";

@Module({
  imports: [TypeOrmModule.forFeature([QuestionLessonEntity])],
  providers: [
    {
      provide: QuestionLessonRepository,
      useClass: QuestionLessonRelationalRepository,
    },
  ],
  exports: [QuestionLessonRepository],
})
export class RelationalQuestionLessonPersistenceModule {}
