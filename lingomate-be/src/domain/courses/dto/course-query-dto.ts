import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString, IsNumber, Min } from "class-validator";
import { Transform } from "class-transformer";
import { StatusEnum } from "@/common/enums/status.enum";

export class CourseQueryDto {
  @IsOptional()
  @IsEnum(StatusEnum)
  status?: StatusEnum;

  @ApiPropertyOptional({
    description: "Filter courses by user ID",
  })
  @IsOptional()
  @IsString()
  userId?: string;

  @ApiPropertyOptional({
    description: "Filter courses by invoice ID",
  })
  @IsOptional()
  @IsString()
  invoiceId?: string;

  @ApiPropertyOptional({
    default: 1,
    description: "Page number for pagination",
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    default: 10,
    description: "Number of items per page",
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1)
  limit?: number = 10;

  @ApiPropertyOptional({
    example: "created_at:DESC",
    description:
      "Sort field and direction (Format: field:direction. Direction must be ASC or DESC)",
  })
  @IsOptional()
  @IsString()
  orderBy?: string = "created_at:DESC";
}

export interface IParsedOrderBy {
  [key: string]: "ASC" | "DESC";
}

export function parseOrderBy(
  orderByString: string = "created_at:DESC",
): IParsedOrderBy {
  try {
    const [field, direction] = orderByString.split(":");
    if (!field || !["ASC", "DESC"].includes(direction)) {
      return { created_at: "DESC" };
    }
    return { [field]: direction as "ASC" | "DESC" };
  } catch {
    return { created_at: "DESC" };
  }
}
