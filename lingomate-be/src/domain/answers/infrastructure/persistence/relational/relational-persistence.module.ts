import { Module } from "@nestjs/common";
import { AnswerRepository } from "../answer.repository";
import { AnswerRelationalRepository } from "./repositories/answer.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AnswerEntity } from "./entities/answer.entity";

@Module({
  imports: [TypeOrmModule.forFeature([AnswerEntity])],
  providers: [
    {
      provide: AnswerRepository,
      useClass: AnswerRelationalRepository,
    },
  ],
  exports: [AnswerRepository],
})
export class RelationalAnswerPersistenceModule {}
