// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from "@nestjs/swagger";
import { CreateCourseInvoicesDto } from "./create-course-invoices.dto";

export class UpdateCourseInvoicesDto extends PartialType(
  CreateCourseInvoicesDto,
) {}
