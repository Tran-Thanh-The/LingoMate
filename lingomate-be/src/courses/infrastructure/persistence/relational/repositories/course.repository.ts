import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CourseEntity } from "../entities/course.entity";
import { NullableType } from "../../../../../utils/types/nullable.type";
import { Course } from "../../../../domain/course";
import { CourseRepository } from "../../course.repository";
import { CourseMapper } from "../mappers/course.mapper";
import { IPaginationOptions } from "../../../../../utils/types/pagination-options";

@Injectable()
export class CourseRelationalRepository implements CourseRepository {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
  ) {}

  async create(data: Course): Promise<Course> {
    const persistenceModel = CourseMapper.toPersistence(data);
    const newEntity = await this.courseRepository.save(
      this.courseRepository.create(persistenceModel),
    );
    return CourseMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Course[]> {
    const entities = await this.courseRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => CourseMapper.toDomain(entity));
  }

  async findById(id: Course["id"]): Promise<NullableType<Course>> {
    const entity = await this.courseRepository.findOne({
      where: { id },
    });

    return entity ? CourseMapper.toDomain(entity) : null;
  }

  async update(id: Course["id"], payload: Partial<Course>): Promise<Course> {
    const entity = await this.courseRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error("Record not found");
    }

    const updatedEntity = await this.courseRepository.save(
      this.courseRepository.create(
        CourseMapper.toPersistence({
          ...CourseMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return CourseMapper.toDomain(updatedEntity);
  }

  async remove(id: Course["id"]): Promise<void> {
    await this.courseRepository.delete(id);
  }
}
