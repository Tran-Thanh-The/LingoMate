import { Module } from "@nestjs/common";
import { UserLessonsService } from "./user-lessons.service";
import { UserLessonsController } from "./user-lessons.controller";
import { RelationalUserLessonPersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";

@Module({
  imports: [RelationalUserLessonPersistenceModule],
  controllers: [UserLessonsController],
  providers: [UserLessonsService],
  exports: [UserLessonsService, RelationalUserLessonPersistenceModule],
})
export class UserLessonsModule {}
