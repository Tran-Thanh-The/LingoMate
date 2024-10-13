import { Module } from "@nestjs/common";
import { LessonRepository } from "../lesson.repository";
import { LessonRelationalRepository } from "./repositories/lesson.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LessonEntity } from "./entities/lesson.entity";

@Module({
  imports: [TypeOrmModule.forFeature([LessonEntity])],
  providers: [
    {
      provide: LessonRepository,
      useClass: LessonRelationalRepository,
    },
  ],
  exports: [LessonRepository],
})
export class RelationalLessonPersistenceModule {}
