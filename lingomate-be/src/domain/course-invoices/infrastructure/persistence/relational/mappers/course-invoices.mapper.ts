import { CourseInvoices } from "@/domain/course-invoices/domain/course-invoices";
import { CreateCourseInvoicesDto } from "@/domain/course-invoices/dto/create-course-invoices.dto";
import { CourseEntity } from "@/domain/courses/infrastructure/persistence/relational/entities/course.entity";
import { UserInvoicesEntity } from "@/domain/user-invoices/infrastructure/persistence/relational/entities/user-invoices.entity";
import { CourseInvoicesEntity } from "../entities/course-invoices.entity";

export class CourseInvoicesMapper {
  static toDomain(raw: CourseInvoicesEntity): CourseInvoices {
    const domainEntity = new CourseInvoices();
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    if (raw.course) {
      domainEntity.course = raw.course;
    }
    if (raw.userInvoices) {
      domainEntity.userInvoices = raw.userInvoices;
    }

    return domainEntity;
  }

  static toPersistence(domainEntity: CourseInvoices): CourseInvoicesEntity {
    const persistenceEntity = new CourseInvoicesEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    if (domainEntity.course) {
      persistenceEntity.course = domainEntity.course;
    }

    if (domainEntity.userInvoices) {
      persistenceEntity.userInvoices = domainEntity.userInvoices;
    }

    return persistenceEntity;
  }

  public static toModel(dto: CreateCourseInvoicesDto): CourseInvoices {
    const model = new CourseInvoices();
    model.userInvoices = new UserInvoicesEntity();
    Object.assign(model.userInvoices, dto.userInvoices);
    model.course = new CourseEntity();
    Object.assign(model.course, dto.course);
    return model;
  }
}
