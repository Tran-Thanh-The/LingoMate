import { LessonCourse } from "@/domain/lesson-courses/domain/lesson-course";
import { LessonCourseEntity } from "../entities/lesson-course.entity";
import { CreateLessonCourseDto } from "@/domain/lesson-courses/dto/create-lesson-course.dto";
import { LessonEntity } from "@/domain/lessons/infrastructure/persistence/relational/entities/lesson.entity";
import { CourseEntity } from "@/domain/courses/infrastructure/persistence/relational/entities/course.entity";
import { StatusEnum } from "@/common/enums/status.enum";

export class LessonCourseMapper {
  static toDomain(raw: LessonCourseEntity): LessonCourse {
    const domainEntity = new LessonCourse();
    domainEntity.id = raw.id;
    domainEntity.lesson = raw.lesson;
    domainEntity.course = raw.course;
    domainEntity.status = raw.status;
    domainEntity.position = raw.position;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: LessonCourse): LessonCourseEntity {
    const persistenceEntity = new LessonCourseEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.lesson = domainEntity.lesson;
    persistenceEntity.course = domainEntity.course;
    persistenceEntity.status = domainEntity.status;
    persistenceEntity.position = domainEntity.position;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }

  public static toModel(dto: CreateLessonCourseDto): LessonCourse {
    const model = new LessonCourse();
    const lesson = new LessonEntity();
    lesson.id = dto.lesson_id;
    model.lesson = lesson;
    const course = new CourseEntity();
    course.id = dto.course_id;
    model.course = course;
    model.status = dto.status ?? StatusEnum.InActive;
    model.position = dto.position;
    return model;
  }
}
