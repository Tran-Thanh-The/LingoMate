import { Module } from "@nestjs/common";
import { UserQuestionsService } from "./user-questions.service";
import { UserQuestionsController } from "./user-questions.controller";
import { RelationalUserQuestionPersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";

@Module({
  imports: [RelationalUserQuestionPersistenceModule],
  controllers: [UserQuestionsController],
  providers: [UserQuestionsService],
  exports: [UserQuestionsService, RelationalUserQuestionPersistenceModule],
})
export class UserQuestionsModule {}
