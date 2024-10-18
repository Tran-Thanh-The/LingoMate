import { CreateInvoiceDto } from "@/domain/invoices/dto/create-invoice.dto";
import { CreateUserDto } from "@/domain/users/dto/create-user.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserInvoicesDto {
  @ApiProperty({
    type: () => CreateUserDto,
  })
  @IsNotEmpty()
  user: CreateUserDto;

  @ApiProperty({
    type: () => CreateInvoiceDto,
  })
  @IsNotEmpty()
  invoice: CreateInvoiceDto;
}
