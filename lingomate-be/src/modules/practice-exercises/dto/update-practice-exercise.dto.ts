import { PartialType } from '@nestjs/swagger';
import { CreatePracticeExerciseDto } from './create-practice-exercise.dto';

export class UpdatePracticeExerciseDto extends PartialType(CreatePracticeExerciseDto) {}
