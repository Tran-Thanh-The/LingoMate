import { Module } from "@nestjs/common";
import { ExerciseRepository } from "../exercise.repository";
import { ExerciseRelationalRepository } from "./repositories/exercise.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExerciseEntity } from "./entities/exercise.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseEntity])],
  providers: [
    {
      provide: ExerciseRepository,
      useClass: ExerciseRelationalRepository,
    },
  ],
  exports: [ExerciseRepository],
})
export class RelationalExercisePersistenceModule {}
