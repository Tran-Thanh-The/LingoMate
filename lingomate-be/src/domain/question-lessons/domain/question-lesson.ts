import { StatusEnum } from "@/common/enums/status.enum";
import { LessonEntity } from "@/domain/lessons/infrastructure/persistence/relational/entities/lesson.entity";
import { QuestionEntity } from "@/domain/questions/infrastructure/persistence/relational/entities/question.entity";
import { ApiProperty } from "@nestjs/swagger";

export class QuestionLesson {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: () => LessonEntity,
  })
  lesson: LessonEntity;

  @ApiProperty({
    type: () => QuestionEntity,
  })
  question: QuestionEntity;

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
