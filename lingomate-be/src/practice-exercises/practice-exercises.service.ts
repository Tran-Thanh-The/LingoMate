import { Injectable } from "@nestjs/common";
import { CreatePracticeExerciseDto } from "./dto/create-practice-exercise.dto";
import { UpdatePracticeExerciseDto } from "./dto/update-practice-exercise.dto";
import { PracticeExerciseRepository } from "./infrastructure/persistence/practice-exercise.repository";
import { IPaginationOptions } from "../utils/types/pagination-options";
import { PracticeExercise } from "./domain/practice-exercise";

@Injectable()
export class PracticeExercisesService {
  constructor(
    private readonly practiceExerciseRepository: PracticeExerciseRepository,
  ) {}

  create(createPracticeExerciseDto: CreatePracticeExerciseDto) {
    return this.practiceExerciseRepository.create(createPracticeExerciseDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.practiceExerciseRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: PracticeExercise["id"]) {
    return this.practiceExerciseRepository.findById(id);
  }

  update(
    id: PracticeExercise["id"],
    updatePracticeExerciseDto: UpdatePracticeExerciseDto,
  ) {
    return this.practiceExerciseRepository.update(
      id,
      updatePracticeExerciseDto,
    );
  }

  remove(id: PracticeExercise["id"]) {
    return this.practiceExerciseRepository.remove(id);
  }
}
