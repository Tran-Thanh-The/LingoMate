import { Module } from "@nestjs/common";
import { QuestionLessonsService } from "./question-lessons.service";
import { QuestionLessonsController } from "./question-lessons.controller";
import { RelationalQuestionLessonPersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";

@Module({
  imports: [RelationalQuestionLessonPersistenceModule],
  controllers: [QuestionLessonsController],
  providers: [QuestionLessonsService],
  exports: [QuestionLessonsService, RelationalQuestionLessonPersistenceModule],
})
export class QuestionLessonsModule {}
