// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from "@nestjs/swagger";
import { CreateUserCourseDto } from "./create-user-course.dto";

export class UpdateUserCourseDto extends PartialType(CreateUserCourseDto) {}
