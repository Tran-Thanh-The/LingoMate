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
import { CourseInvoicesService } from "./course-invoices.service";
import { CreateCourseInvoicesDto } from "./dto/create-course-invoices.dto";
import { UpdateCourseInvoicesDto } from "./dto/update-course-invoices.dto";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { CourseInvoices } from "./domain/course-invoices";
import { AuthGuard } from "@nestjs/passport";
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from "@/utils/dto/infinity-pagination-response.dto";
import { infinityPagination } from "@/utils/infinity-pagination";
import { FindAllCourseInvoicesDto } from "./dto/find-all-course-invoices.dto";

@ApiTags("Courseinvoices")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller({
  path: "course-invoices",
  version: "1",
})
export class CourseInvoicesController {
  constructor(private readonly courseInvoicesService: CourseInvoicesService) {}

  @Post()
  @ApiCreatedResponse({
    type: CourseInvoices,
  })
  create(@Body() createCourseInvoicesDto: CreateCourseInvoicesDto) {
    return this.courseInvoicesService.create(createCourseInvoicesDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(CourseInvoices),
  })
  async findAll(
    @Query() query: FindAllCourseInvoicesDto,
  ): Promise<InfinityPaginationResponseDto<CourseInvoices>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.courseInvoicesService.findAllWithPagination({
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
    type: CourseInvoices,
  })
  findOne(@Param("id") id: string) {
    return this.courseInvoicesService.findOne(id);
  }

  @Patch(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: CourseInvoices,
  })
  update(
    @Param("id") id: string,
    @Body() updateCourseInvoicesDto: UpdateCourseInvoicesDto,
  ) {
    return this.courseInvoicesService.update(id, updateCourseInvoicesDto);
  }

  @Delete(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  remove(@Param("id") id: string) {
    return this.courseInvoicesService.remove(id);
  }
}
