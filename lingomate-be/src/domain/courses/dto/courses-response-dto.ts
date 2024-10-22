import { ApiProperty } from "@nestjs/swagger";
import { CreateCourseDto } from "./create-course.dto";

export class CourseListResponseDto<T = CreateCourseDto> {
  @ApiProperty({ type: [CreateCourseDto] })
  data: T[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  totalPages: number;
}
