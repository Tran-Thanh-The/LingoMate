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
import { QuestionsService } from "./questions.service";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { UpdateQuestionDto } from "./dto/update-question.dto";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { Question } from "./domain/question";
import { AuthGuard } from "@nestjs/passport";
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from "../utils/dto/infinity-pagination-response.dto";
import { infinityPagination } from "../utils/infinity-pagination";
import { FindAllQuestionsDto } from "./dto/find-all-questions.dto";

@ApiTags("Questions")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller({
  path: "questions",
  version: "1",
})
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  @ApiCreatedResponse({
    type: Question,
  })
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Question),
  })
  async findAll(
    @Query() query: FindAllQuestionsDto,
  ): Promise<InfinityPaginationResponseDto<Question>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.questionsService.findAllWithPagination({
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
    type: Question,
  })
  findOne(@Param("id") id: string) {
    return this.questionsService.findOne(id);
  }

  @Patch(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Question,
  })
  update(
    @Param("id") id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionsService.update(id, updateQuestionDto);
  }

  @Delete(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  remove(@Param("id") id: string) {
    return this.questionsService.remove(id);
  }
}
