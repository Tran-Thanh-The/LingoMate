import { Module } from "@nestjs/common";
import { InvoicesService } from "./invoices.service";
import { InvoicesController } from "./invoices.controller";
import { RelationalInvoicePersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";

@Module({
  imports: [RelationalInvoicePersistenceModule],
  controllers: [InvoicesController],
  providers: [InvoicesService],
  exports: [InvoicesService, RelationalInvoicePersistenceModule],
})
export class InvoicesModule {}
