import { StatusEnum } from "@/common/enums/status.enum";
import { CreateLessonDto } from "@/domain/lessons/dto/create-lesson.dto";
import { CreateQuestionDto } from "@/domain/questions/dto/create-question.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";

export class CreateQuestionLessonDto {
  @ApiProperty({
    type: () => CreateLessonDto,
  })
  @IsNotEmpty()
  lesson: CreateLessonDto;

  @ApiProperty({
    type: () => CreateQuestionDto,
  })
  @IsNotEmpty()
  question: CreateQuestionDto;

  @ApiPropertyOptional({
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  status: StatusEnum;

  @ApiProperty({
    type: Number,
  })
  @IsNotEmpty()
  position: number;
}
