import { Injectable } from "@nestjs/common";
import { CreateLessonDto } from "./dto/create-lesson.dto";
import { UpdateLessonDto } from "./dto/update-lesson.dto";
import { LessonRepository } from "./infrastructure/persistence/lesson.repository";
import { IPaginationOptions } from "../utils/types/pagination-options";
import { Lesson } from "./domain/lesson";

@Injectable()
export class LessonsService {
  constructor(private readonly lessonRepository: LessonRepository) {}

  create(createLessonDto: CreateLessonDto) {
    return this.lessonRepository.create(createLessonDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.lessonRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Lesson["id"]) {
    return this.lessonRepository.findById(id);
  }

  update(id: Lesson["id"], updateLessonDto: UpdateLessonDto) {
    return this.lessonRepository.update(id, updateLessonDto);
  }

  remove(id: Lesson["id"]) {
    return this.lessonRepository.remove(id);
  }
}
