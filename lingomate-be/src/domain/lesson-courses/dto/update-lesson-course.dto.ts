// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from "@nestjs/swagger";
import { CreateLessonCourseDto } from "./create-lesson-course.dto";

export class UpdateLessonCourseDto extends PartialType(CreateLessonCourseDto) {}
