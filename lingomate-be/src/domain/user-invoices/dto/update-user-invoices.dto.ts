// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from "@nestjs/swagger";
import { CreateUserInvoicesDto } from "./create-user-invoices.dto";

export class UpdateUserInvoicesDto extends PartialType(CreateUserInvoicesDto) {}
