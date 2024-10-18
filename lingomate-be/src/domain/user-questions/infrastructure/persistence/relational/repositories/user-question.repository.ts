import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserQuestionEntity } from "../entities/user-question.entity";
import { NullableType } from "@/utils/types/nullable.type";
import { UserQuestion } from "@/domain/user-questions/domain/user-question";
import { UserQuestionRepository } from "../../user-question.repository";
import { UserQuestionMapper } from "../mappers/user-question.mapper";
import { IPaginationOptions } from "@/utils/types/pagination-options";

@Injectable()
export class UserQuestionRelationalRepository
  implements UserQuestionRepository
{
  constructor(
    @InjectRepository(UserQuestionEntity)
    private readonly userQuestionRepository: Repository<UserQuestionEntity>,
  ) {}

  async create(data: UserQuestion): Promise<UserQuestion> {
    const persistenceModel = UserQuestionMapper.toPersistence(data);
    const newEntity = await this.userQuestionRepository.save(
      this.userQuestionRepository.create(persistenceModel),
    );
    return UserQuestionMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<UserQuestion[]> {
    const entities = await this.userQuestionRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => UserQuestionMapper.toDomain(entity));
  }

  async findById(id: UserQuestion["id"]): Promise<NullableType<UserQuestion>> {
    const entity = await this.userQuestionRepository.findOne({
      where: { id },
    });

    return entity ? UserQuestionMapper.toDomain(entity) : null;
  }

  async update(
    id: UserQuestion["id"],
    payload: Partial<UserQuestion>,
  ): Promise<UserQuestion> {
    const entity = await this.userQuestionRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error("Record not found");
    }

    const updatedEntity = await this.userQuestionRepository.save(
      this.userQuestionRepository.create(
        UserQuestionMapper.toPersistence({
          ...UserQuestionMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return UserQuestionMapper.toDomain(updatedEntity);
  }

  async remove(id: UserQuestion["id"]): Promise<void> {
    await this.userQuestionRepository.delete(id);
  }
}
