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
import { PracticeExercisesService } from "./practice-exercises.service";
import { CreatePracticeExerciseDto } from "./dto/create-practice-exercise.dto";
import { UpdatePracticeExerciseDto } from "./dto/update-practice-exercise.dto";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { PracticeExercise } from "./domain/practice-exercise";
import { AuthGuard } from "@nestjs/passport";
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from "@/utils/dto/infinity-pagination-response.dto";
import { infinityPagination } from "@/utils/infinity-pagination";
import { FindAllPracticeExercisesDto } from "./dto/find-all-practice-exercises.dto";

@ApiTags("Practiceexercises")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller({
  path: "practice-exercises",
  version: "1",
})
export class PracticeExercisesController {
  constructor(
    private readonly practiceExercisesService: PracticeExercisesService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    type: PracticeExercise,
  })
  create(@Body() createPracticeExerciseDto: CreatePracticeExerciseDto) {
    return this.practiceExercisesService.create(createPracticeExerciseDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(PracticeExercise),
  })
  async findAll(
    @Query() query: FindAllPracticeExercisesDto,
  ): Promise<InfinityPaginationResponseDto<PracticeExercise>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.practiceExercisesService.findAllWithPagination({
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
    type: PracticeExercise,
  })
  findOne(@Param("id") id: string) {
    return this.practiceExercisesService.findOne(id);
  }

  @Patch(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: PracticeExercise,
  })
  update(
    @Param("id") id: string,
    @Body() updatePracticeExerciseDto: UpdatePracticeExerciseDto,
  ) {
    return this.practiceExercisesService.update(id, updatePracticeExerciseDto);
  }

  @Delete(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  remove(@Param("id") id: string) {
    return this.practiceExercisesService.remove(id);
  }
}
