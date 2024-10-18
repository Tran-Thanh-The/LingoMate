import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateLessonDto } from "@/domain/lessons/dto/create-lesson.dto";
import { CreateCourseDto } from "./create-course.dto";
import {
  IsArray,
  ValidateNested,
} from "class-validator/types/decorator/decorators";
import { Type } from "class-transformer";

export class CourseWithDetailsDTO extends PartialType(CreateCourseDto) {
  @ApiProperty({
    type: [CreateLessonDto],
    description: "Array of lessons in the course",
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateLessonDto)
  lessons: CreateLessonDto[];
}
