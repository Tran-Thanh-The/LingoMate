import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ExerciseEntity } from "../entities/exercise.entity";
import { NullableType } from "../../../../../utils/types/nullable.type";
import { Exercise } from "../../../../domain/exercise";
import { ExerciseRepository } from "../../exercise.repository";
import { ExerciseMapper } from "../mappers/exercise.mapper";
import { IPaginationOptions } from "../../../../../utils/types/pagination-options";

@Injectable()
export class ExerciseRelationalRepository implements ExerciseRepository {
  constructor(
    @InjectRepository(ExerciseEntity)
    private readonly exerciseRepository: Repository<ExerciseEntity>,
  ) {}

  async create(data: Exercise): Promise<Exercise> {
    const persistenceModel = ExerciseMapper.toPersistence(data);
    const newEntity = await this.exerciseRepository.save(
      this.exerciseRepository.create(persistenceModel),
    );
    return ExerciseMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Exercise[]> {
    const entities = await this.exerciseRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => ExerciseMapper.toDomain(entity));
  }

  async findById(id: Exercise["id"]): Promise<NullableType<Exercise>> {
    const entity = await this.exerciseRepository.findOne({
      where: { id },
    });

    return entity ? ExerciseMapper.toDomain(entity) : null;
  }

  async update(
    id: Exercise["id"],
    payload: Partial<Exercise>,
  ): Promise<Exercise> {
    const entity = await this.exerciseRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error("Record not found");
    }

    const updatedEntity = await this.exerciseRepository.save(
      this.exerciseRepository.create(
        ExerciseMapper.toPersistence({
          ...ExerciseMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return ExerciseMapper.toDomain(updatedEntity);
  }

  async remove(id: Exercise["id"]): Promise<void> {
    await this.exerciseRepository.delete(id);
  }
}
