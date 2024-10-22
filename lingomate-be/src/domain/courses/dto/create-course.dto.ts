import { StatusEnum } from "@/common/enums/status.enum";
import { FileDto } from "@/files/dto/file.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class CreateCourseDto {
  @ApiProperty({ example: "John Doe", type: String })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  price: number;

  @ApiProperty({ type: String })
  @IsOptional()
  description?: string | null;

  @ApiPropertyOptional({ type: () => FileDto })
  @IsOptional()
  photo?: FileDto | null;

  @ApiPropertyOptional({
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  @IsOptional()
  status?: StatusEnum;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  category_id: string;

  @ApiProperty({ type: Date })
  creatAt?: Date;
}
