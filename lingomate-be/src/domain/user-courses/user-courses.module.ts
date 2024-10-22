import { Module } from "@nestjs/common";
import { UserCoursesService } from "./user-courses.service";
import { UserCoursesController } from "./user-courses.controller";
import { RelationalUserCoursePersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";

@Module({
  imports: [RelationalUserCoursePersistenceModule],
  controllers: [UserCoursesController],
  providers: [UserCoursesService],
  exports: [UserCoursesService, RelationalUserCoursePersistenceModule],
})
export class UserCoursesModule {}
