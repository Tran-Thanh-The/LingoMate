import { Injectable } from "@nestjs/common";
import { CreateAnswerDto } from "./dto/create-answer.dto";
import { UpdateAnswerDto } from "./dto/update-answer.dto";
import { AnswerRepository } from "./infrastructure/persistence/answer.repository";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { Answer } from "./domain/answer";
import { AnswerMapper } from "./infrastructure/persistence/relational/mappers/answer.mapper";
import { QuestionRepository } from "../questions/infrastructure/persistence/question.repository";

@Injectable()
export class AnswersService {
  constructor(
    private readonly answerRepository: AnswerRepository,
    private readonly questionRepository: QuestionRepository,
  ) {}

  async create(createAnswerDto: CreateAnswerDto) {
    const model = await AnswerMapper.toModel(
      createAnswerDto,
      this.questionRepository,
    );
    return this.answerRepository.create(model);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.answerRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Answer["id"]) {
    return this.answerRepository.findById(id);
  }

  update(id: Answer["id"], updateAnswerDto: UpdateAnswerDto) {
    return this.answerRepository.update(id, updateAnswerDto);
  }

  remove(id: Answer["id"]) {
    return this.answerRepository.remove(id);
  }
}
