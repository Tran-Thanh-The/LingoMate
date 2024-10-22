import { Injectable } from "@nestjs/common";
import { CreateUserQuestionDto } from "./dto/create-user-question.dto";
import { UpdateUserQuestionDto } from "./dto/update-user-question.dto";
import { UserQuestionRepository } from "./infrastructure/persistence/user-question.repository";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { UserQuestion } from "./domain/user-question";
import { UserQuestionMapper } from "./infrastructure/persistence/relational/mappers/user-question.mapper";

@Injectable()
export class UserQuestionsService {
  constructor(
    private readonly userQuestionRepository: UserQuestionRepository,
  ) {}

  create(createUserQuestionDto: CreateUserQuestionDto) {
    const model = UserQuestionMapper.toModel(createUserQuestionDto);
    return this.userQuestionRepository.create(model);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.userQuestionRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: UserQuestion["id"]) {
    return this.userQuestionRepository.findById(id);
  }

  update(id: UserQuestion["id"], updateUserQuestionDto: UpdateUserQuestionDto) {
    return this.userQuestionRepository.update(id, updateUserQuestionDto);
  }

  remove(id: UserQuestion["id"]) {
    return this.userQuestionRepository.remove(id);
  }
}
