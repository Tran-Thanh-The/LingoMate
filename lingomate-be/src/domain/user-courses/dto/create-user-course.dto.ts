import { StatusEnum } from "@/common/enums/status.enum";
import { CreateCourseDto } from "@/domain/courses/dto/create-course.dto";
import { CreateUserDto } from "@/domain/users/dto/create-user.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";

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

  @ApiProperty({
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  status: StatusEnum;
}
