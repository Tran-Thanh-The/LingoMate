import { Module } from "@nestjs/common";
import { PracticeExercisesService } from "./practice-exercises.service";
import { PracticeExercisesController } from "./practice-exercises.controller";
import { RelationalPracticeExercisePersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";

@Module({
  imports: [RelationalPracticeExercisePersistenceModule],
  controllers: [PracticeExercisesController],
  providers: [PracticeExercisesService],
  exports: [
    PracticeExercisesService,
    RelationalPracticeExercisePersistenceModule,
  ],
})
export class PracticeExercisesModule {}
