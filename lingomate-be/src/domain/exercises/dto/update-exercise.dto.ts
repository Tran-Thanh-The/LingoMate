// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from "@nestjs/swagger";
import { CreateExerciseDto } from "./create-exercise.dto";

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {}
