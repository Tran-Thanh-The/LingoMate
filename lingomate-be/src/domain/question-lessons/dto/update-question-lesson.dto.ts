// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from "@nestjs/swagger";
import { CreateQuestionLessonDto } from "./create-question-lesson.dto";

export class UpdateQuestionLessonDto extends PartialType(
  CreateQuestionLessonDto,
) {}
