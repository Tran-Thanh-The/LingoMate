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
import { LessonsService } from "./lessons.service";
import { CreateLessonDto } from "./dto/create-lesson.dto";
import { UpdateLessonDto } from "./dto/update-lesson.dto";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { Lesson } from "./domain/lesson";
import { AuthGuard } from "@nestjs/passport";
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from "../utils/dto/infinity-pagination-response.dto";
import { infinityPagination } from "../utils/infinity-pagination";
import { FindAllLessonsDto } from "./dto/find-all-lessons.dto";

@ApiTags("Lessons")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller({
  path: "lessons",
  version: "1",
})
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  @ApiCreatedResponse({
    type: Lesson,
  })
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.create(createLessonDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Lesson),
  })
  async findAll(
    @Query() query: FindAllLessonsDto,
  ): Promise<InfinityPaginationResponseDto<Lesson>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.lessonsService.findAllWithPagination({
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
    type: Lesson,
  })
  findOne(@Param("id") id: string) {
    return this.lessonsService.findOne(id);
  }

  @Patch(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Lesson,
  })
  update(@Param("id") id: string, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonsService.update(id, updateLessonDto);
  }

  @Delete(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  remove(@Param("id") id: string) {
    return this.lessonsService.remove(id);
  }
}
