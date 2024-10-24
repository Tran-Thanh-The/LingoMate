import { PartialType, ApiPropertyOptional } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";

import { Transform, Type } from "class-transformer";
import { IsEmail, IsEnum, IsOptional, MinLength } from "class-validator";
import { FileDto } from "../../../files/dto/file.dto";
import { RoleDto } from "../../roles/dto/role.dto";
import { lowerCaseTransformer } from "@/utils/transformers/lower-case.transformer";
import { StatusEnum } from "@/common/enums/status.enum";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ example: "test1@example.com", type: String })
  @Transform(lowerCaseTransformer)
  @IsOptional()
  @IsEmail()
  email?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @MinLength(6)
  password?: string;

  provider?: string;

  socialId?: string | null;

  @ApiPropertyOptional({ example: "John", type: String })
  @IsOptional()
  firstName?: string | null;

  @ApiPropertyOptional({ example: "Doe", type: String })
  @IsOptional()
  lastName?: string | null;

  @ApiPropertyOptional({ type: () => FileDto })
  @IsOptional()
  photo?: FileDto | null;

  @ApiPropertyOptional({ type: Date })
  @IsOptional()
  dob?: Date | null;

  @ApiPropertyOptional({ type: () => RoleDto })
  @IsOptional()
  @Type(() => RoleDto)
  role?: RoleDto | null;

  @ApiPropertyOptional({
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  status: StatusEnum;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  hash?: string | null;
}
