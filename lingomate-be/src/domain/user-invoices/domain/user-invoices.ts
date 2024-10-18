import { InvoiceEntity } from "@/domain/invoices/infrastructure/persistence/relational/entities/invoice.entity";
import { UserEntity } from "@/domain/users/infrastructure/persistence/relational/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

export class UserInvoices {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({ type: () => UserEntity })
  user: UserEntity;

  @ApiProperty({ type: () => InvoiceEntity })
  invoice: InvoiceEntity;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;
}
