import { Module } from "@nestjs/common";
import { PracticeExerciseRepository } from "../practice-exercise.repository";
import { PracticeExerciseRelationalRepository } from "./repositories/practice-exercise.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PracticeExerciseEntity } from "./entities/practice-exercise.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PracticeExerciseEntity])],
  providers: [
    {
      provide: PracticeExerciseRepository,
      useClass: PracticeExerciseRelationalRepository,
    },
  ],
  exports: [PracticeExerciseRepository],
})
export class RelationalPracticeExercisePersistenceModule {}
