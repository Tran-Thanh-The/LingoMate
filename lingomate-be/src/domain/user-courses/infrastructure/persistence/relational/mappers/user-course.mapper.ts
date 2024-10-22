import { CourseEntity } from "@/domain/courses/infrastructure/persistence/relational/entities/course.entity";
import { UserCourse } from "@/domain/user-courses/domain/user-course";
import { CreateUserCourseDto } from "@/domain/user-courses/dto/create-user-course.dto";
import { UserEntity } from "@/domain/users/infrastructure/persistence/relational/entities/user.entity";
import { UserCourseEntity } from "../entities/user-course.entity";

export class UserCourseMapper {
  static toDomain(raw: UserCourseEntity): UserCourse {
    const domainEntity = new UserCourse();
    domainEntity.id = raw.id;
    domainEntity.user = raw.user;
    domainEntity.course = raw.course;
    domainEntity.status = raw.status;
    domainEntity.lastPosition = raw.lastPosition;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: UserCourse): UserCourseEntity {
    const persistenceEntity = new UserCourseEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.user = domainEntity.user;
    persistenceEntity.course = domainEntity.course;
    persistenceEntity.lastPosition = domainEntity.lastPosition;
    persistenceEntity.status = domainEntity.status;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }

  public static toModel(dto: CreateUserCourseDto): UserCourse {
    const model = new UserCourse();
    model.user = new UserEntity();
    Object.assign(model.user, dto.user);
    model.course = new CourseEntity();
    Object.assign(model.course, dto.course);
    return model;
  }
}
