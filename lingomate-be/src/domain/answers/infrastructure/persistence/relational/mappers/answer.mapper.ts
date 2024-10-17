import { Answer } from "../../../../domain/answer";
import { AnswerEntity } from "../entities/answer.entity";

export class AnswerMapper {
  static toDomain(raw: AnswerEntity): Answer {
    const domainEntity = new Answer();
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Answer): AnswerEntity {
    const persistenceEntity = new AnswerEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
