import { StatusEnum } from "@/common/enums/status.enum";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class CreateLessonCourseDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  lesson_id: string;

  @ApiProperty({
    type: String,
  })
  course_id: string;

  @ApiPropertyOptional({
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  @IsOptional()
  status?: StatusEnum;

  @ApiProperty({
    type: Number,
  })
  position: number;
}
