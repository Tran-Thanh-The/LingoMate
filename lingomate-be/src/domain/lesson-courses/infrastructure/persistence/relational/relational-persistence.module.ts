import { Module } from "@nestjs/common";
import { LessonCourseRepository } from "../lesson-course.repository";
import { LessonCourseRelationalRepository } from "./repositories/lesson-course.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LessonCourseEntity } from "./entities/lesson-course.entity";
import { LessonEntity } from "@/domain/lessons/infrastructure/persistence/relational/entities/lesson.entity";
import { CourseEntity } from "@/domain/courses/infrastructure/persistence/relational/entities/course.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([LessonCourseEntity, LessonEntity, CourseEntity]),
  ],
  providers: [
    {
      provide: LessonCourseRepository,
      useClass: LessonCourseRelationalRepository,
    },
  ],
  exports: [LessonCourseRepository],
})
export class RelationalLessonCoursePersistenceModule {}
