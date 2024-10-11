import { Exercise } from "../../../../domain/exercise";
import { ExerciseEntity } from "../entities/exercise.entity";

export class ExerciseMapper {
  static toDomain(raw: ExerciseEntity): Exercise {
    const domainEntity = new Exercise();
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Exercise): ExerciseEntity {
    const persistenceEntity = new ExerciseEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
