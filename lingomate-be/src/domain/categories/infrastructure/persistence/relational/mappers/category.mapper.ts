import { Category } from "@/domain/categories/domain/category";
import { CategoryEntity } from "../entities/category.entity";
import { CreateCategoryDto } from "@/domain/categories/dto/create-category.dto";

export class CategoryMapper {
  static toDomain(raw: CategoryEntity): Category {
    const domainEntity = new Category();
    domainEntity.id = raw.id;
    domainEntity.name = raw.name;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Category): CategoryEntity {
    const persistenceEntity = new CategoryEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.name = domainEntity.name;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }

  static toModel(dto: CreateCategoryDto): Category {
    const model = new Category();
    model.name = dto.name;

    return model;
  }
}
