import { Module } from "@nestjs/common";
import { LessonsService } from "./lessons.service";
import { LessonsController } from "./lessons.controller";
import { RelationalLessonPersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";

@Module({
  imports: [RelationalLessonPersistenceModule],
  controllers: [LessonsController],
  providers: [LessonsService],
  exports: [LessonsService, RelationalLessonPersistenceModule],
})
export class LessonsModule {}
