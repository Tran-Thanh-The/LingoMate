import { RoleEnum } from "@/domain/roles/roles.enum";
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from "@/utils/dto/infinity-pagination-response.dto";
import { infinityPagination } from "@/utils/infinity-pagination";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Roles } from "../roles/roles.decorator";
import { RolesGuard } from "../roles/roles.guard";
import { CoursesService } from "./courses.service";
import { Course } from "./domain/course";
import { CreateCourseDto } from "./dto/create-course.dto";
import { FindAllCoursesDto } from "./dto/find-all-courses.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { LessonCourse } from "../lesson-courses/domain/lesson-course";
import { CreateLessonCourseDto } from "../lesson-courses/dto/create-lesson-course.dto";
import { CourseListResponseDto } from "./dto/courses-response-dto";
import { CourseQueryDto, parseOrderBy } from "./dto/course-query-dto";

@ApiTags("Courses")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"), RolesGuard)
@Controller({
  path: "courses",
  version: "1",
})
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Roles(RoleEnum.admin, RoleEnum.staff)
  @Post()
  @ApiCreatedResponse({
    type: Course,
  })
  create(@Body() createCourseDto: CreateCourseDto, @Req() req) {
    const userId = req.user.id;
    return this.coursesService.create(createCourseDto, userId);
  }

  @Roles(RoleEnum.admin, RoleEnum.staff, RoleEnum.user)
  @Get("/list")
  @ApiOperation({ summary: "Get list of courses with filters and pagination" })
  @ApiResponse({
    status: 200,
    description: "List of courses retrieved successfully",
    type: CourseListResponseDto,
  })
  async getListCourse(
    @Query() query: CourseQueryDto,
  ): Promise<CourseListResponseDto<CreateCourseDto>> {
    const orderBy = parseOrderBy(query.orderBy);

    return this.coursesService.getListCourse(
      query.status,
      query.userId,
      query.invoiceId,
      query.page,
      query.limit,
      orderBy,
    );
  }

  @Roles(RoleEnum.admin, RoleEnum.staff, RoleEnum.user)
  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Course),
  })
  async findAll(
    @Query() query: FindAllCoursesDto,
  ): Promise<InfinityPaginationResponseDto<Course>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.coursesService.findAllWithPagination({
        paginationOptions: {
          page,
          limit,
        },
      }),
      { page, limit },
    );
  }

  @Roles(RoleEnum.admin, RoleEnum.staff, RoleEnum.user)
  @Get(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Course,
  })
  findOne(@Param("id") id: string) {
    return this.coursesService.findOne(id);
  }

  @Roles(RoleEnum.admin, RoleEnum.staff, RoleEnum.user)
  @Get(":id/details")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Course,
  })
  getCourseWithDetails(@Param("id") id: string) {
    return this.coursesService.getCourseDetails(id);
  }

  @Roles(RoleEnum.admin, RoleEnum.staff)
  @Patch(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Course,
  })
  update(@Param("id") id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Roles(RoleEnum.admin, RoleEnum.staff)
  @Delete(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  remove(@Param("id") id: string) {
    return this.coursesService.remove(id);
  }

  @Roles(RoleEnum.admin, RoleEnum.staff)
  @Post(":id/lessons")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiCreatedResponse({
    type: LessonCourse,
  })
  addLessonToCourse(
    @Param("id") id: string,
    @Body() createLessonCourseDto: CreateLessonCourseDto,
  ) {
    return this.coursesService.addLessonToCourse(id, createLessonCourseDto);
  }

  // @Roles(RoleEnum.admin, RoleEnum.staff)
  // @Patch(":courseId/lessons/:lessonId/position")
  // @ApiParam({
  //   name: "courseId",
  //   type: String,
  //   required: true,
  // })
  // @ApiParam({
  //   name: "lessonId",
  //   type: String,
  //   required: true,
  // })
  // @ApiOkResponse({
  //   type: LessonCourse,
  // })
  // updateLessonPosition(
  //   @Param("courseId") courseId: string,
  //   @Param("lessonId") lessonId: string,
  //   @Body("newPosition") newPosition: number,
  // ) {
  //   return this.coursesService.updateLessonPosition(
  //     courseId,
  //     lessonId,
  //     newPosition,
  //   );
  // }
}
