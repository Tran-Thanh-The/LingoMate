import { AnswerTypesEnum } from "@/common/enums/answer.enum";
import { StatusEnum } from "@/common/enums/status.enum";
import { CreateQuestionDto } from "@/domain/questions/dto/create-question.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class CreateAnswerDto {
  // Don't forget to use the class-validator decorators in the DTO properties.
  @ApiProperty({
    enum: AnswerTypesEnum,
  })
  @IsNotEmpty()
  @IsEnum(AnswerTypesEnum)
  answerType: AnswerTypesEnum;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  answerAudio: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  answerText: string;

  @ApiProperty({ type: Boolean })
  @IsNotEmpty()
  @IsBoolean()
  isCorrect: boolean;

  @ApiProperty({ type: Number })
  position: number;

  @ApiPropertyOptional({
    type: () => CreateQuestionDto,
  })
  @IsOptional()
  question?: CreateQuestionDto | null;

  @ApiProperty({
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  status: StatusEnum;
}
