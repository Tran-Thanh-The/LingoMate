import { StatusEnum } from "@/common/enums/status.enum";
import { CreateCourseDto } from "@/domain/courses/dto/create-course.dto";
import { CreateUserDto } from "@/domain/users/dto/create-user.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserCourseDto {
  // Don't forget to use the class-validator decorators in the DTO properties.
  @ApiProperty({
    type: () => CreateUserDto,
  })
  @IsNotEmpty()
  user: CreateUserDto;

  @ApiProperty({
    type: () => CreateCourseDto,
  })
  @IsNotEmpty()
  course: CreateCourseDto;

  @ApiPropertyOptional({ type: Number })
  @IsOptional()
  lastPosition?: number | null;

  @ApiProperty({
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  status: StatusEnum;
}
