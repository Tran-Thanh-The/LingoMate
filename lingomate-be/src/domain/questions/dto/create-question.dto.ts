import { QuestionTypesEnum } from "@/common/enums/question.enum";
import { StatusEnum } from "@/common/enums/status.enum";
import { CreateCategoryDto } from "@/domain/categories/dto/create-category.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class CreateQuestionDto {
  // Don't forget to use the class-validator decorators in the DTO properties.
  @ApiProperty({ type: String })
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  description?: string | null;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  audioUrl?: string | null;

  @ApiProperty({
    enum: QuestionTypesEnum,
  })
  @IsNotEmpty()
  @IsEnum(QuestionTypesEnum)
  questionType: QuestionTypesEnum;

  @ApiProperty({
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  status: StatusEnum;

  @ApiProperty({
    type: () => CreateCategoryDto,
  })
  @IsNotEmpty()
  category: CreateCategoryDto;
}
