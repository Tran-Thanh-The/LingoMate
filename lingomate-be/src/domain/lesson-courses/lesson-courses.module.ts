import { Module } from "@nestjs/common";
import { RelationalLessonCoursePersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";
import { LessonCoursesController } from "./lesson-courses.controller";
import { LessonCoursesService } from "./lesson-courses.service";

@Module({
  imports: [RelationalLessonCoursePersistenceModule],
  controllers: [LessonCoursesController],
  providers: [LessonCoursesService],
  exports: [LessonCoursesService, RelationalLessonCoursePersistenceModule],
})
export class LessonCoursesModule {}
