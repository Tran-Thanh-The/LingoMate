import { UserInvoices } from "@/domain/user-invoices/domain/user-invoices";
import { UserInvoicesEntity } from "../entities/user-invoices.entity";
import { CreateUserInvoicesDto } from "@/domain/user-invoices/dto/create-user-invoices.dto";
import { UserEntity } from "@/domain/users/infrastructure/persistence/relational/entities/user.entity";
import { InvoiceEntity } from "@/domain/invoices/infrastructure/persistence/relational/entities/invoice.entity";

export class UserInvoicesMapper {
  static toDomain(raw: UserInvoicesEntity): UserInvoices {
    const domainEntity = new UserInvoices();
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;
    domainEntity.deletedAt = raw.deletedAt;
    if (raw.user) {
      domainEntity.user = raw.user;
    }
    if (raw.invoice) {
      domainEntity.invoice = raw.invoice;
    }

    return domainEntity;
  }

  static toPersistence(domainEntity: UserInvoices): UserInvoicesEntity {
    const persistenceEntity = new UserInvoicesEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;
    persistenceEntity.deletedAt = domainEntity.deletedAt;

    if (domainEntity.user) {
      persistenceEntity.user = domainEntity.user;
    }
    if (domainEntity.invoice) {
      persistenceEntity.invoice = domainEntity.invoice;
    }

    return persistenceEntity;
  }

  public static toModel(dto: CreateUserInvoicesDto): UserInvoices {
    const model = new UserInvoices();
    model.user = new UserEntity();
    Object.assign(model.user, dto.user);
    model.invoice = new InvoiceEntity();
    Object.assign(model.invoice, dto.invoice);
    return model;
  }
}
