import { LessonTypesEnum } from "@/common/enums/lesson.enum";
import { StatusEnum } from "@/common/enums/status.enum";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";

export class CreateLessonDto {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiPropertyOptional({ type: String })
  @IsString()
  @IsOptional()
  content?: string | null;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  videoUrl?: string | null;

  @ApiProperty({
    enum: LessonTypesEnum,
  })
  @IsNotEmpty()
  @IsEnum(LessonTypesEnum)
  lessonType: LessonTypesEnum;

  @ApiPropertyOptional({
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  @IsOptional()
  status?: StatusEnum;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsUUID()
  course_id?: string;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  stars?: number | null;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  totalStars?: number | null;
}
