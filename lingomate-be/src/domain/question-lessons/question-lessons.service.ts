import { Injectable } from "@nestjs/common";
import { CreateQuestionLessonDto } from "./dto/create-question-lesson.dto";
import { UpdateQuestionLessonDto } from "./dto/update-question-lesson.dto";
import { QuestionLessonRepository } from "./infrastructure/persistence/question-lesson.repository";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { QuestionLesson } from "./domain/question-lesson";
import { QuestionLessonMapper } from "./infrastructure/persistence/relational/mappers/question-lesson.mapper";

@Injectable()
export class QuestionLessonsService {
  constructor(
    private readonly questionLessonRepository: QuestionLessonRepository,
  ) {}

  create(createQuestionLessonDto: CreateQuestionLessonDto) {
    const model = QuestionLessonMapper.toModel(createQuestionLessonDto);
    return this.questionLessonRepository.create(model);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.questionLessonRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: QuestionLesson["id"]) {
    return this.questionLessonRepository.findById(id);
  }

  update(
    id: QuestionLesson["id"],
    updateQuestionLessonDto: UpdateQuestionLessonDto,
  ) {
    return this.questionLessonRepository.update(id, updateQuestionLessonDto);
  }

  remove(id: QuestionLesson["id"]) {
    return this.questionLessonRepository.remove(id);
  }
}
