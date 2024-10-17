import { Module } from "@nestjs/common";
import { ExercisesService } from "./exercises.service";
import { ExercisesController } from "./exercises.controller";
import { RelationalExercisePersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";

@Module({
  imports: [RelationalExercisePersistenceModule],
  controllers: [ExercisesController],
  providers: [ExercisesService],
  exports: [ExercisesService, RelationalExercisePersistenceModule],
})
export class ExercisesModule {}
