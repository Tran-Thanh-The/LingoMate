import { Module } from "@nestjs/common";
import { LessonCoursesModule } from "../lesson-courses/lesson-courses.module";
import { CoursesController } from "./courses.controller";
import { CoursesService } from "./courses.service";
import { RelationalCoursePersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";
import { UsersModule } from "../users/users.module";
import { UserCoursesModule } from "../user-courses/user-courses.module";

@Module({
  imports: [
    RelationalCoursePersistenceModule,
    LessonCoursesModule,
    UserCoursesModule,
    UsersModule,
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService, RelationalCoursePersistenceModule],
})
export class CoursesModule {}
