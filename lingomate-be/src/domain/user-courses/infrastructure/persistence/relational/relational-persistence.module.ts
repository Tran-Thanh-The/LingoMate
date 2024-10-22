import { Module } from "@nestjs/common";
import { UserCourseRepository } from "../user-course.repository";
import { UserCourseRelationalRepository } from "./repositories/user-course.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserCourseEntity } from "./entities/user-course.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserCourseEntity])],
  providers: [
    {
      provide: UserCourseRepository,
      useClass: UserCourseRelationalRepository,
    },
  ],
  exports: [UserCourseRepository],
})
export class RelationalUserCoursePersistenceModule {}
