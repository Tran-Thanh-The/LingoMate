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
import { AnswersService } from "./answers.service";
import { CreateAnswerDto } from "./dto/create-answer.dto";
import { UpdateAnswerDto } from "./dto/update-answer.dto";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { Answer } from "./domain/answer";
import { AuthGuard } from "@nestjs/passport";
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from "@/utils/dto/infinity-pagination-response.dto";
import { infinityPagination } from "@/utils/infinity-pagination";
import { FindAllAnswersDto } from "./dto/find-all-answers.dto";

@ApiTags("Answers")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller({
  path: "answers",
  version: "1",
})
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post()
  @ApiCreatedResponse({
    type: Answer,
  })
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answersService.create(createAnswerDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Answer),
  })
  async findAll(
    @Query() query: FindAllAnswersDto,
  ): Promise<InfinityPaginationResponseDto<Answer>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.answersService.findAllWithPagination({
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
    type: Answer,
  })
  findOne(@Param("id") id: string) {
    return this.answersService.findOne(id);
  }

  @Patch(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Answer,
  })
  update(@Param("id") id: string, @Body() updateAnswerDto: UpdateAnswerDto) {
    return this.answersService.update(id, updateAnswerDto);
  }

  @Delete(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  remove(@Param("id") id: string) {
    return this.answersService.remove(id);
  }
}
