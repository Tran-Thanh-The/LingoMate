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
import { UserInvoicesService } from "./user-invoices.service";
import { CreateUserInvoicesDto } from "./dto/create-user-invoices.dto";
import { UpdateUserInvoicesDto } from "./dto/update-user-invoices.dto";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { UserInvoices } from "./domain/user-invoices";
import { AuthGuard } from "@nestjs/passport";
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from "@/utils/dto/infinity-pagination-response.dto";
import { infinityPagination } from "@/utils/infinity-pagination";
import { FindAllUserInvoicesDto } from "./dto/find-all-user-invoices.dto";

@ApiTags("Userinvoices")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller({
  path: "user-invoices",
  version: "1",
})
export class UserInvoicesController {
  constructor(private readonly userInvoicesService: UserInvoicesService) {}

  @Post()
  @ApiCreatedResponse({
    type: UserInvoices,
  })
  create(@Body() createUserInvoicesDto: CreateUserInvoicesDto) {
    return this.userInvoicesService.create(createUserInvoicesDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(UserInvoices),
  })
  async findAll(
    @Query() query: FindAllUserInvoicesDto,
  ): Promise<InfinityPaginationResponseDto<UserInvoices>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.userInvoicesService.findAllWithPagination({
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
    type: UserInvoices,
  })
  findOne(@Param("id") id: string) {
    return this.userInvoicesService.findOne(id);
  }

  @Patch(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: UserInvoices,
  })
  update(
    @Param("id") id: string,
    @Body() updateUserInvoicesDto: UpdateUserInvoicesDto,
  ) {
    return this.userInvoicesService.update(id, updateUserInvoicesDto);
  }

  @Delete(":id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
  })
  remove(@Param("id") id: string) {
    return this.userInvoicesService.remove(id);
  }
}
