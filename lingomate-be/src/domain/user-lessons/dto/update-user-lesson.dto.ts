// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from "@nestjs/swagger";
import { CreateUserLessonDto } from "./create-user-lesson.dto";

export class UpdateUserLessonDto extends PartialType(CreateUserLessonDto) {}
