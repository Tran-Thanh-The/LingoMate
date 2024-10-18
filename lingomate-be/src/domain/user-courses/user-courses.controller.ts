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
import { UserCoursesService } from "./user-courses.service";
import { CreateUserCourseDto } from "./dto/create-user-course.dto";
import { UpdateUserCourseDto } from "./dto/update-user-course.dto";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { UserCourse } from "./domain/user-course";
import { AuthGuard } from "@nestjs/passport";
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from "@/utils/dto/infinity-pagination-response.dto";
import { infinityPagination } from "@/utils/infinity-pagination";
import { FindAllUserCoursesDto } from "./dto/find-all-user-courses.dto";

@ApiTags("Usercourses")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller({
  path: "user-courses",
  version: "1",
})
export class UserCoursesController {
  constructor(private readonly userCoursesService: UserCoursesService) {}

  @Post()
  @ApiCreatedResponse({
    type: UserCourse,
  })
  create(@Body() createUserCourseDto: CreateUserCourseDto) {
    return this.userCoursesService.create(createUserCourseDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(UserCourse),
  })
  async findAll(
    @Query() query: FindAllUserCoursesDto,
  ): Promise<InfinityPaginationResponseDto<UserCourse>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.userCoursesService.findAllWithPagination({
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
    type: UserCourse,
  })
  findOne(@Param("id") id: string) {
    return this.userCoursesService.findOne(id);
  }

  @Patch(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: UserCourse,
  })
  update(
    @Param("id") id: string,
    @Body() updateUserCourseDto: UpdateUserCourseDto,
  ) {
    return this.userCoursesService.update(id, updateUserCourseDto);
  }

  @Delete(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  remove(@Param("id") id: string) {
    return this.userCoursesService.remove(id);
  }
}
