import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QuestionLessonEntity } from "../entities/question-lesson.entity";
import { NullableType } from "@/utils/types/nullable.type";
import { QuestionLesson } from "@/domain/question-lessons/domain/question-lesson";
import { QuestionLessonRepository } from "../../question-lesson.repository";
import { QuestionLessonMapper } from "../mappers/question-lesson.mapper";
import { IPaginationOptions } from "@/utils/types/pagination-options";

@Injectable()
export class QuestionLessonRelationalRepository
  implements QuestionLessonRepository
{
  constructor(
    @InjectRepository(QuestionLessonEntity)
    private readonly questionLessonRepository: Repository<QuestionLessonEntity>,
  ) {}

  async create(data: QuestionLesson): Promise<QuestionLesson> {
    const persistenceModel = QuestionLessonMapper.toPersistence(data);
    const newEntity = await this.questionLessonRepository.save(
      this.questionLessonRepository.create(persistenceModel),
    );
    return QuestionLessonMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<QuestionLesson[]> {
    const entities = await this.questionLessonRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => QuestionLessonMapper.toDomain(entity));
  }

  async findById(
    id: QuestionLesson["id"],
  ): Promise<NullableType<QuestionLesson>> {
    const entity = await this.questionLessonRepository.findOne({
      where: { id },
    });

    return entity ? QuestionLessonMapper.toDomain(entity) : null;
  }

  async update(
    id: QuestionLesson["id"],
    payload: Partial<QuestionLesson>,
  ): Promise<QuestionLesson> {
    const entity = await this.questionLessonRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error("Record not found");
    }

    const updatedEntity = await this.questionLessonRepository.save(
      this.questionLessonRepository.create(
        QuestionLessonMapper.toPersistence({
          ...QuestionLessonMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return QuestionLessonMapper.toDomain(updatedEntity);
  }

  async remove(id: QuestionLesson["id"]): Promise<void> {
    await this.questionLessonRepository.delete(id);
  }
}
