import { CategoryEntity } from "@/domain/categories/infrastructure/persistence/relational/entities/category.entity";
import { CreateQuestionDto } from "@/domain/questions/dto/create-question.dto";
import { Question } from "../../../../domain/question";
import { QuestionEntity } from "../entities/question.entity";

export class QuestionMapper {
  static toDomain(raw: QuestionEntity): Question {
    const domainEntity = new Question();
    domainEntity.id = raw.id;
    domainEntity.title = raw.title;
    domainEntity.description = raw.description;
    domainEntity.audioUrl = raw.audioUrl;
    domainEntity.questionType = raw.questionType;
    domainEntity.status = raw.status;
    domainEntity.category = raw.category;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Question): QuestionEntity {
    const persistenceEntity = new QuestionEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.title = domainEntity.title;
    persistenceEntity.description = domainEntity.description;
    persistenceEntity.audioUrl = domainEntity.audioUrl;
    persistenceEntity.questionType = domainEntity.questionType;
    persistenceEntity.status = domainEntity.status;
    persistenceEntity.category = domainEntity.category;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }

  static toModel(dto: CreateQuestionDto): Question {
    const model = new Question();
    model.title = dto.title;
    model.description = dto.description;
    model.audioUrl = dto.audioUrl;
    model.questionType = dto.questionType;
    model.status = dto.status;
    model.category = new CategoryEntity();
    Object.assign(model.category, dto.category);
    return model;
  }
}
