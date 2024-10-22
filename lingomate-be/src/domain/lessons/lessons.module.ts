import { Module } from "@nestjs/common";
import { LessonsService } from "./lessons.service";
import { LessonsController } from "./lessons.controller";
import { RelationalLessonPersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";
import { LessonCoursesModule } from "../lesson-courses/lesson-courses.module";
import { CoursesModule } from "../courses/courses.module";

@Module({
  imports: [
    RelationalLessonPersistenceModule,
    LessonCoursesModule,
    CoursesModule,
  ],
  controllers: [LessonsController],
  providers: [LessonsService],
  exports: [LessonsService, RelationalLessonPersistenceModule],
})
export class LessonsModule {}
