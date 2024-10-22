import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from "@nestjs/common";
import { UserQuestionsService } from "./user-questions.service";
import { CreateUserQuestionDto } from "./dto/create-user-question.dto";
import { UpdateUserQuestionDto } from "./dto/update-user-question.dto";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { UserQuestion } from "./domain/user-question";
import { AuthGuard } from "@nestjs/passport";
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from "@/utils/dto/infinity-pagination-response.dto";
import { infinityPagination } from "@/utils/infinity-pagination";
import { FindAllUserQuestionsDto } from "./dto/find-all-user-questions.dto";

@ApiTags("Userquestions")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller({
  path: "user-questions",
  version: "1",
})
export class UserQuestionsController {
  constructor(private readonly userQuestionsService: UserQuestionsService) {}

  @Post()
  @ApiCreatedResponse({
    type: UserQuestion,
  })
  create(@Body() createUserQuestionDto: CreateUserQuestionDto) {
    return this.userQuestionsService.create(createUserQuestionDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(UserQuestion),
  })
  async findAll(
    @Query() query: FindAllUserQuestionsDto,
  ): Promise<InfinityPaginationResponseDto<UserQuestion>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.userQuestionsService.findAllWithPagination({
        paginationOptions: {
          page,
          limit,
        },
      }),
      { page, limit },
    );
  }

  @Get(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: UserQuestion,
  })
  findOne(@Param("id") id: string) {
    return this.userQuestionsService.findOne(id);
  }

  @Patch(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: UserQuestion,
  })
  update(
    @Param("id") id: string,
    @Body() updateUserQuestionDto: UpdateUserQuestionDto,
  ) {
    return this.userQuestionsService.update(id, updateUserQuestionDto);
  }

  @Delete(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  remove(@Param("id") id: string) {
    return this.userQuestionsService.remove(id);
  }
}
