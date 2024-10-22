import { Lesson } from "./../../../../domain/lesson";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LessonEntity } from "../entities/lesson.entity";
import { NullableType } from "@/utils/types/nullable.type";
import { LessonRepository } from "../../lesson.repository";
import { LessonMapper } from "../mappers/lesson.mapper";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { StatusEnum } from "@/common/enums/status.enum";

@Injectable()
export class LessonRelationalRepository implements LessonRepository {
  constructor(
    @InjectRepository(LessonEntity)
    private readonly lessonRepository: Repository<LessonEntity>,
  ) {}

  async create(data: Lesson): Promise<Lesson> {
    const persistenceModel = LessonMapper.toPersistence(data);
    const newEntity = await this.lessonRepository.save(
      this.lessonRepository.create(persistenceModel),
    );
    return LessonMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Lesson[]> {
    const entities = await this.lessonRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => LessonMapper.toDomain(entity));
  }

  async findById(id: Lesson["id"]): Promise<NullableType<Lesson>> {
    const entity = await this.lessonRepository.findOne({
      where: { id },
    });

    return entity ? LessonMapper.toDomain(entity) : null;
  }

  async findByTitle(title: Lesson["title"]): Promise<NullableType<Lesson>> {
    const entity = await this.lessonRepository.findOne({
      where: { title, status: StatusEnum.Active },
    });

    return entity ? LessonMapper.toDomain(entity) : null;
  }

  async update(id: Lesson["id"], payload: Partial<Lesson>): Promise<Lesson> {
    const entity = await this.lessonRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error("Record not found");
    }

    const updatedEntity = await this.lessonRepository.save(
      this.lessonRepository.create(
        LessonMapper.toPersistence({
          ...LessonMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return LessonMapper.toDomain(updatedEntity);
  }

  async remove(id: Lesson["id"]): Promise<void> {
    await this.lessonRepository.delete(id);
  }
  async save(lesson: Lesson): Promise<void> {
    if (!lesson || !lesson.id) {
      throw new NotFoundException("Lesson not found");
    }
    await this.lessonRepository.save(lesson);
  }
}
