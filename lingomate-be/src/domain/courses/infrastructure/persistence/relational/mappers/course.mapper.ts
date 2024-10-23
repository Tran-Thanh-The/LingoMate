import { StatusEnum } from "@/common/enums/status.enum";
import { CategoryEntity } from "@/domain/categories/infrastructure/persistence/relational/entities/category.entity";
import { CreateCourseDto } from "@/domain/courses/dto/create-course.dto";
import { FileEntity } from "@/files/infrastructure/persistence/relational/entities/file.entity";
import { FileMapper } from "@/files/infrastructure/persistence/relational/mappers/file.mapper";
import { Course } from "../../../../domain/course";
import { CourseEntity } from "../entities/course.entity";

export class CourseMapper {
  static toDomain(raw: CourseEntity): Course {
    const domainEntity = new Course();
    domainEntity.id = raw.id;
    domainEntity.name = raw.name;
    domainEntity.price = raw.price;
    domainEntity.description = raw.description;
    if (raw.photo) {
      domainEntity.photo = FileMapper.toDomain(raw.photo);
    }
    domainEntity.category = raw.category;
    domainEntity.status = raw.status;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;
    domainEntity.deletedAt = raw.deletedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Course): CourseEntity {
    const persistenceEntity = new CourseEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.name = domainEntity.name;
    persistenceEntity.price = domainEntity.price;
    persistenceEntity.description = domainEntity.description;

    let photo: FileEntity | undefined | null = undefined;

    if (domainEntity.photo) {
      persistenceEntity.photo = FileMapper.toPersistence(domainEntity.photo);
    } else {
      persistenceEntity.photo = null;
    }

    persistenceEntity.status = domainEntity.status;
    persistenceEntity.category = domainEntity.category;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;
    persistenceEntity.deletedAt = domainEntity.deletedAt;

    return persistenceEntity;
  }

  static toModel(dto: CreateCourseDto): Course {
    const model = new Course();
    model.name = dto.name;
    model.price = dto.price;
    model.description = dto.description;
    model.status = dto.status ?? StatusEnum.IN_ACTIVE;
    const category = new CategoryEntity();
    category.id = dto.category_id;
    model.category = category;
    if (dto.photo) {
      model.photo = FileMapper.toPersistence(dto.photo);
    }
    if (dto.creatAt) {
      model.createdAt = dto.creatAt;
    }
    return model;
  }

  static toDto(model: Course): CreateCourseDto {
    const dto = new CreateCourseDto();
    dto.name = model.name;
    dto.price = model.price;
    dto.description = model.description;
    dto.status = model.status ?? StatusEnum.IN_ACTIVE;
    const category = new CategoryEntity();
    category.id = model.id;
    dto.category_id = model.id;
    if (model.photo) {
      dto.photo = FileMapper.toPersistence(model.photo);
    }
    dto.creatAt = model.createdAt;

    return dto;
  }
}
