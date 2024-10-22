import { AnswerTypesEnum } from "@/common/enums/answer.enum";
import { StatusEnum } from "@/common/enums/status.enum";
import { QuestionEntity } from "@/domain/questions/infrastructure/persistence/relational/entities/question.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Column } from "typeorm";

export class Answer {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    enum: AnswerTypesEnum,
  })
  answerType: AnswerTypesEnum;

  @ApiProperty({ type: String })
  answerAudio: string;

  @ApiProperty({ type: String })
  @Column({ type: String })
  answerText: string;

  @ApiProperty({ type: Boolean })
  isCorrect: boolean;

  @ApiProperty({ type: String })
  position: number;

  @ApiProperty({
    type: () => QuestionEntity,
  })
  question?: QuestionEntity | null;

  @ApiProperty({
    enum: StatusEnum,
  })
  status: StatusEnum;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
