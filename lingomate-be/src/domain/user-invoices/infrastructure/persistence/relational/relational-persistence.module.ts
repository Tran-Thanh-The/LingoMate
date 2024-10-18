import { Module } from "@nestjs/common";
import { UserInvoicesRepository } from "../user-invoices.repository";
import { UserInvoicesRelationalRepository } from "./repositories/user-invoices.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserInvoicesEntity } from "./entities/user-invoices.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserInvoicesEntity])],
  providers: [
    {
      provide: UserInvoicesRepository,
      useClass: UserInvoicesRelationalRepository,
    },
  ],
  exports: [UserInvoicesRepository],
})
export class RelationalUserInvoicesPersistenceModule {}
