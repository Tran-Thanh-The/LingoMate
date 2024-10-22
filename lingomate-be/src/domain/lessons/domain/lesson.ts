import { LessonTypesEnum } from "@/common/enums/lesson.enum";
import { StatusEnum } from "@/common/enums/status.enum";
import { ApiProperty } from "@nestjs/swagger";

export class Lesson {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  title: string;

  @ApiProperty({
    type: String,
  })
  content?: string | null;

  @ApiProperty({
    type: String,
  })
  videoUrl?: string | null;

  @ApiProperty({
    enum: LessonTypesEnum,
  })
  lessonType: LessonTypesEnum;

  @ApiProperty({
    enum: StatusEnum,
  })
  status: StatusEnum;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt?: Date | null;
}
