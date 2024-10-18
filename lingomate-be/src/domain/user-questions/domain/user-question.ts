import { StatusEnum } from "@/common/enums/status.enum";
import { QuestionEntity } from "@/domain/questions/infrastructure/persistence/relational/entities/question.entity";
import { UserEntity } from "@/domain/users/infrastructure/persistence/relational/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

export class UserQuestion {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: () => UserEntity,
  })
  user: UserEntity;

  @ApiProperty({
    type: () => QuestionEntity,
  })
  question: QuestionEntity;

  @ApiProperty({
    enum: StatusEnum,
  })
  status: StatusEnum;

  @ApiProperty({
    type: String,
  })
  answerPick: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
