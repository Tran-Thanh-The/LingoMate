import { StatusEnum } from "@/common/enums/status.enum";
import { CourseEntity } from "@/domain/courses/infrastructure/persistence/relational/entities/course.entity";
import { LessonEntity } from "@/domain/lessons/infrastructure/persistence/relational/entities/lesson.entity";
import { ApiProperty } from "@nestjs/swagger";

export class LessonCourse {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: () => LessonEntity,
  })
  lesson: LessonEntity;

  @ApiProperty({
    type: () => CourseEntity,
  })
  course: CourseEntity;

  @ApiProperty({
    enum: StatusEnum,
  })
  status: StatusEnum;

  @ApiProperty({
    type: Number,
  })
  position: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
