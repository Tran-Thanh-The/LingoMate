import { Module } from "@nestjs/common";
import { QuestionsModule } from "../questions/questions.module";
import { AnswersController } from "./answers.controller";
import { AnswersService } from "./answers.service";
import { RelationalAnswerPersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";

@Module({
  imports: [QuestionsModule, RelationalAnswerPersistenceModule],
  controllers: [AnswersController],
  providers: [AnswersService],
  exports: [AnswersService, RelationalAnswerPersistenceModule],
})
export class AnswersModule {}
