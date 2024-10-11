import { Injectable } from "@nestjs/common";
import { CreateExerciseDto } from "./dto/create-exercise.dto";
import { UpdateExerciseDto } from "./dto/update-exercise.dto";
import { ExerciseRepository } from "./infrastructure/persistence/exercise.repository";
import { IPaginationOptions } from "../utils/types/pagination-options";
import { Exercise } from "./domain/exercise";

@Injectable()
export class ExercisesService {
  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  create(createExerciseDto: CreateExerciseDto) {
    return this.exerciseRepository.create(createExerciseDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.exerciseRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Exercise["id"]) {
    return this.exerciseRepository.findById(id);
  }

  update(id: Exercise["id"], updateExerciseDto: UpdateExerciseDto) {
    return this.exerciseRepository.update(id, updateExerciseDto);
  }

  remove(id: Exercise["id"]) {
    return this.exerciseRepository.remove(id);
  }
}
