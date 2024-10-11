import { Module } from '@nestjs/common';
import { PracticeExercisesService } from './practice-exercises.service';
import { PracticeExercisesController } from './practice-exercises.controller';

@Module({
  controllers: [PracticeExercisesController],
  providers: [PracticeExercisesService],
})
export class PracticeExercisesModule {}
