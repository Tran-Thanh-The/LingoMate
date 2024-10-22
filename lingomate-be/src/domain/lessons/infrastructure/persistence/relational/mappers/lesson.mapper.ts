import { CreateLessonDto } from "@/domain/lessons/dto/create-lesson.dto";
import { Lesson } from "../../../../domain/lesson";
import { LessonEntity } from "../entities/lesson.entity";
import { StatusEnum } from "@/common/enums/status.enum";

export class LessonMapper {
  static toDomain(raw: LessonEntity): Lesson {
    const domainEntity = new Lesson();
    domainEntity.id = raw.id;
    domainEntity.title = raw.title;
    domainEntity.content = raw.content;
    domainEntity.videoUrl = raw.videoUrl;
    domainEntity.status = raw.status;
    domainEntity.lessonType = raw.lessonType;
    domainEntity.stars = raw.stars;
    domainEntity.totalStars = raw.totalStars;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;
    domainEntity.deletedAt = raw.deletedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Lesson): LessonEntity {
    const persistenceEntity = new LessonEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.title = domainEntity.title;
    persistenceEntity.content = domainEntity.content;
    persistenceEntity.videoUrl = domainEntity.videoUrl;
    persistenceEntity.lessonType = domainEntity.lessonType;
    persistenceEntity.status = domainEntity.status;
    persistenceEntity.stars = domainEntity.stars;
    persistenceEntity.totalStars = domainEntity.totalStars;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;
    persistenceEntity.deletedAt = domainEntity.deletedAt;

    return persistenceEntity;
  }

  static toModel(dto: CreateLessonDto): Lesson {
    const model = new Lesson();
    model.id = dto.id;
    model.title = dto.title;
    model.content = dto.content;
    model.videoUrl = dto.videoUrl;
    model.lessonType = dto.lessonType;
    model.stars = dto.stars;
    model.totalStars = dto.totalStars;
    model.status = dto.status ?? StatusEnum.InActive;
    return model;
  }

  static toDto(model: Lesson): CreateLessonDto {
    const dto = new CreateLessonDto();
    dto.id = model.id;
    dto.title = model.title;
    dto.content = model.content;
    dto.videoUrl = model.videoUrl;
    dto.lessonType = model.lessonType;
    dto.stars = model.stars;
    dto.totalStars = model.totalStars;
    dto.status = model.status;
    return dto;
  }
}
