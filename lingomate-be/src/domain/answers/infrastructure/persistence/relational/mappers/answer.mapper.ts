import { CreateAnswerDto } from "@/domain/answers/dto/create-answer.dto";
import { QuestionRepository } from "@/domain/questions/infrastructure/persistence/question.repository";
import { QuestionMapper } from "@/domain/questions/infrastructure/persistence/relational/mappers/question.mapper";
import { Answer } from "../../../../domain/answer";
import { AnswerEntity } from "../entities/answer.entity";

export class AnswerMapper {
  static toDomain(raw: AnswerEntity): Answer {
    const domainEntity = new Answer();
    domainEntity.id = raw.id;
    domainEntity.answerType = raw.answerType;
    domainEntity.answerAudio = raw.answerAudio;
    domainEntity.answerText = raw.answerText;
    domainEntity.isCorrect = raw.isCorrect;
    domainEntity.position = raw.position;
    domainEntity.question = raw.question;
    domainEntity.status = raw.status;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Answer): AnswerEntity {
    const persistenceEntity = new AnswerEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.answerType = domainEntity.answerType;
    persistenceEntity.answerAudio = domainEntity.answerAudio;
    persistenceEntity.answerText = domainEntity.answerText;
    persistenceEntity.isCorrect = domainEntity.isCorrect;
    persistenceEntity.position = domainEntity.position;
    persistenceEntity.question = domainEntity.question;
    persistenceEntity.status = domainEntity.status;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }

  static async toModel(
    dto: CreateAnswerDto,
    questionRepository: QuestionRepository,
  ): Promise<Answer> {
    const model = new Answer();
    model.answerType = dto.answerType;
    model.answerAudio = dto.answerAudio;
    model.answerText = dto.answerText;
    model.isCorrect = dto.isCorrect;
    model.position = dto.position;
    model.status = dto.status;
    if (dto.question) {
      if (typeof dto.question === "string") {
        const question = await questionRepository.findById(dto.question);
        if (question) {
          model.question = QuestionMapper.toPersistence(question);
        } else {
          model.question = null;
        }
      } else {
        // Nếu question là một CreateQuestionDto, tạo một QuestionEntity mới
        const questionModel = QuestionMapper.toModel(dto.question);
        model.question = QuestionMapper.toPersistence(questionModel);
      }
    } else {
      model.question = null;
    }

    return model;
  }
}
