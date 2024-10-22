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
import { LessonCoursesService } from "./lesson-courses.service";
import { CreateLessonCourseDto } from "./dto/create-lesson-course.dto";
import { UpdateLessonCourseDto } from "./dto/update-lesson-course.dto";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { LessonCourse } from "./domain/lesson-course";
import { AuthGuard } from "@nestjs/passport";
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from "@/utils/dto/infinity-pagination-response.dto";
import { infinityPagination } from "@/utils/infinity-pagination";
import { FindAllLessonCoursesDto } from "./dto/find-all-lesson-courses.dto";

@ApiTags("Lessoncourses")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller({
  path: "lesson-courses",
  version: "1",
})
export class LessonCoursesController {
  constructor(private readonly lessonCoursesService: LessonCoursesService) {}

  @Post()
  @ApiCreatedResponse({
    type: LessonCourse,
  })
  create(@Body() createLessonCourseDto: CreateLessonCourseDto) {
    return this.lessonCoursesService.create(createLessonCourseDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(LessonCourse),
  })
  async findAll(
    @Query() query: FindAllLessonCoursesDto,
  ): Promise<InfinityPaginationResponseDto<LessonCourse>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.lessonCoursesService.findAllWithPagination({
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
    type: LessonCourse,
  })
  findOne(@Param("id") id: string) {
    return this.lessonCoursesService.findOne(id);
  }

  @Patch(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: LessonCourse,
  })
  update(
    @Param("id") id: string,
    @Body() updateLessonCourseDto: UpdateLessonCourseDto,
  ) {
    return this.lessonCoursesService.update(id, updateLessonCourseDto);
  }

  @Delete(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  remove(@Param("id") id: string) {
    return this.lessonCoursesService.remove(id);
  }
}
