import { Module } from "@nestjs/common";
import { UserLessonRepository } from "../user-lesson.repository";
import { UserLessonRelationalRepository } from "./repositories/user-lesson.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserLessonEntity } from "./entities/user-lesson.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserLessonEntity])],
  providers: [
    {
      provide: UserLessonRepository,
      useClass: UserLessonRelationalRepository,
    },
  ],
  exports: [UserLessonRepository],
})
export class RelationalUserLessonPersistenceModule {}
