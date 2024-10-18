import { Module } from "@nestjs/common";
import { UserQuestionRepository } from "../user-question.repository";
import { UserQuestionRelationalRepository } from "./repositories/user-question.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserQuestionEntity } from "./entities/user-question.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserQuestionEntity])],
  providers: [
    {
      provide: UserQuestionRepository,
      useClass: UserQuestionRelationalRepository,
    },
  ],
  exports: [UserQuestionRepository],
})
export class RelationalUserQuestionPersistenceModule {}
