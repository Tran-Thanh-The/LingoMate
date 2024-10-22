import { StatusEnum } from "@/common/enums/status.enum";
import { CreateQuestionDto } from "@/domain/questions/dto/create-question.dto";
import { CreateUserDto } from "@/domain/users/dto/create-user.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";

export class CreateUserQuestionDto {
  // Don't forget to use the class-validator decorators in the DTO properties.
  @ApiProperty({
    type: () => CreateUserDto,
  })
  @IsNotEmpty()
  user: CreateUserDto;

  @ApiProperty({
    type: () => CreateQuestionDto,
  })
  @IsNotEmpty()
  question: CreateQuestionDto;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  answerPick: string;

  @ApiProperty({
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  status: StatusEnum;
}
