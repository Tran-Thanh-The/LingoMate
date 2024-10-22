import { QuestionLesson } from "@/domain/question-lessons/domain/question-lesson";
import { QuestionLessonEntity } from "../entities/question-lesson.entity";
import { CreateQuestionLessonDto } from "@/domain/question-lessons/dto/create-question-lesson.dto";
import { QuestionEntity } from "@/domain/questions/infrastructure/persistence/relational/entities/question.entity";
import { LessonEntity } from "@/domain/lessons/infrastructure/persistence/relational/entities/lesson.entity";

export class QuestionLessonMapper {
  static toDomain(raw: QuestionLessonEntity): QuestionLesson {
    const domainEntity = new QuestionLesson();
    domainEntity.id = raw.id;
    domainEntity.status = raw.status;
    domainEntity.lesson = raw.lesson;
    domainEntity.question = raw.question;
    domainEntity.position = raw.position;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: QuestionLesson): QuestionLessonEntity {
    const persistenceEntity = new QuestionLessonEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.lesson = domainEntity.lesson;
    persistenceEntity.question = domainEntity.question;
    persistenceEntity.status = domainEntity.status;
    persistenceEntity.position = domainEntity.position;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }

  public static toModel(dto: CreateQuestionLessonDto): QuestionLesson {
    const model = new QuestionLesson();
    model.question = new QuestionEntity();
    Object.assign(model.question, dto.question);
    model.lesson = new LessonEntity();
    Object.assign(model.lesson, dto.lesson);
    return model;
  }
}
