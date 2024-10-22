import { Injectable } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { UpdateQuestionDto } from "./dto/update-question.dto";
import { QuestionRepository } from "./infrastructure/persistence/question.repository";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { Question } from "./domain/question";
import { QuestionMapper } from "./infrastructure/persistence/relational/mappers/question.mapper";

@Injectable()
export class QuestionsService {
  constructor(private readonly questionRepository: QuestionRepository) {}

  create(createQuestionDto: CreateQuestionDto) {
    const model = QuestionMapper.toModel(createQuestionDto);
    return this.questionRepository.create(model);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.questionRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Question["id"]) {
    return this.questionRepository.findById(id);
  }

  update(id: Question["id"], updateQuestionDto: UpdateQuestionDto) {
    return this.questionRepository.update(id, updateQuestionDto);
  }

  remove(id: Question["id"]) {
    return this.questionRepository.remove(id);
  }
}
