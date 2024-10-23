import { Transform, Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  // decorators here
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from "class-validator";
import { FileDto } from "../../../files/dto/file.dto";
import { RoleDto } from "../../roles/dto/role.dto";
import { lowerCaseTransformer } from "@/utils/transformers/lower-case.transformer";
import { StatusEnum } from "@/common/enums/status.enum";

export class CreateUserDto {
  @ApiProperty({ example: "test1@example.com", type: String })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @IsEmail()
  email: string | null;

  @ApiProperty()
  @MinLength(6)
  password?: string;

  provider?: string;

  socialId?: string | null;

  @ApiProperty({ example: "John Doe", type: String })
  @IsNotEmpty()
  fullName: string | null;

  @ApiPropertyOptional({ type: () => FileDto })
  @IsOptional()
  photo?: FileDto | null;

  @ApiPropertyOptional({ type: RoleDto })
  @IsOptional()
  @Type(() => RoleDto)
  role?: RoleDto | null;

  @ApiPropertyOptional({ type: Date })
  @IsOptional()
  dob?: Date | null;

  @ApiPropertyOptional({
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  status: StatusEnum;

  @ApiPropertyOptional({ type: String})
  @IsOptional()
  hash?: string | null;
}
