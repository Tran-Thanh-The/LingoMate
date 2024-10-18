import { CreateCourseDto } from "@/domain/courses/dto/create-course.dto";
import { CreateUserInvoicesDto } from "@/domain/user-invoices/dto/create-user-invoices.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCourseInvoicesDto {
  @ApiProperty({
    type: () => CreateCourseDto,
  })
  course: CreateCourseDto;

  @ApiProperty({
    type: () => CreateUserInvoicesDto,
  })
  @IsNotEmpty()
  userInvoices: CreateUserInvoicesDto;
}
