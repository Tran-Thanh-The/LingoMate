import { Module } from "@nestjs/common";
import { AnswersService } from "./answers.service";
import { AnswersController } from "./answers.controller";
import { RelationalAnswerPersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";

@Module({
  imports: [RelationalAnswerPersistenceModule],
  controllers: [AnswersController],
  providers: [AnswersService],
  exports: [AnswersService, RelationalAnswerPersistenceModule],
})
export class AnswersModule {}
