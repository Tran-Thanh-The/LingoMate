import { Invoice } from "../../../../domain/invoice";
import { InvoiceEntity } from "../entities/invoice.entity";

export class InvoiceMapper {
  static toDomain(raw: InvoiceEntity): Invoice {
    const domainEntity = new Invoice();
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Invoice): InvoiceEntity {
    const persistenceEntity = new InvoiceEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
