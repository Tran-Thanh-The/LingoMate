import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QuestionEntity } from "../entities/question.entity";
import { NullableType } from "@/utils/types/nullable.type";
import { Question } from "../../../../domain/question";
import { QuestionRepository } from "../../question.repository";
import { QuestionMapper } from "../mappers/question.mapper";
import { IPaginationOptions } from "@/utils/types/pagination-options";

@Injectable()
export class QuestionRelationalRepository implements QuestionRepository {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,
  ) {}

  async create(data: Question): Promise<Question> {
    const persistenceModel = QuestionMapper.toPersistence(data);
    const newEntity = await this.questionRepository.save(
      this.questionRepository.create(persistenceModel),
    );
    return QuestionMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Question[]> {
    const entities = await this.questionRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => QuestionMapper.toDomain(entity));
  }

  async findById(id: Question["id"]): Promise<NullableType<Question>> {
    const entity = await this.questionRepository.findOne({
      where: { id },
    });

    return entity ? QuestionMapper.toDomain(entity) : null;
  }

  async update(
    id: Question["id"],
    payload: Partial<Question>,
  ): Promise<Question> {
    const entity = await this.questionRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error("Record not found");
    }

    const updatedEntity = await this.questionRepository.save(
      this.questionRepository.create(
        QuestionMapper.toPersistence({
          ...QuestionMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return QuestionMapper.toDomain(updatedEntity);
  }

  async remove(id: Question["id"]): Promise<void> {
    await this.questionRepository.delete(id);
  }
}
