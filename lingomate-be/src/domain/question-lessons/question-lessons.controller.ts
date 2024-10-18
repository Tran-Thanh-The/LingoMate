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
import { QuestionLessonsService } from "./question-lessons.service";
import { CreateQuestionLessonDto } from "./dto/create-question-lesson.dto";
import { UpdateQuestionLessonDto } from "./dto/update-question-lesson.dto";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { QuestionLesson } from "./domain/question-lesson";
import { AuthGuard } from "@nestjs/passport";
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from "@/utils/dto/infinity-pagination-response.dto";
import { infinityPagination } from "@/utils/infinity-pagination";
import { FindAllQuestionLessonsDto } from "./dto/find-all-question-lessons.dto";

@ApiTags("Questionlessons")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller({
  path: "question-lessons",
  version: "1",
})
export class QuestionLessonsController {
  constructor(
    private readonly questionLessonsService: QuestionLessonsService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    type: QuestionLesson,
  })
  create(@Body() createQuestionLessonDto: CreateQuestionLessonDto) {
    return this.questionLessonsService.create(createQuestionLessonDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(QuestionLesson),
  })
  async findAll(
    @Query() query: FindAllQuestionLessonsDto,
  ): Promise<InfinityPaginationResponseDto<QuestionLesson>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.questionLessonsService.findAllWithPagination({
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
    type: QuestionLesson,
  })
  findOne(@Param("id") id: string) {
    return this.questionLessonsService.findOne(id);
  }

  @Patch(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: QuestionLesson,
  })
  update(
    @Param("id") id: string,
    @Body() updateQuestionLessonDto: UpdateQuestionLessonDto,
  ) {
    return this.questionLessonsService.update(id, updateQuestionLessonDto);
  }

  @Delete(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  remove(@Param("id") id: string) {
    return this.questionLessonsService.remove(id);
  }
}
