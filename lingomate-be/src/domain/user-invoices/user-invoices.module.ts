import { Module } from "@nestjs/common";
import { UserInvoicesService } from "./user-invoices.service";
import { UserInvoicesController } from "./user-invoices.controller";
import { RelationalUserInvoicesPersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";

@Module({
  imports: [RelationalUserInvoicesPersistenceModule],
  controllers: [UserInvoicesController],
  providers: [UserInvoicesService],
  exports: [UserInvoicesService, RelationalUserInvoicesPersistenceModule],
})
export class UserInvoicesModule {}
