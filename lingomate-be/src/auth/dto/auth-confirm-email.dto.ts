import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AuthConfirmEmailDto {
  @ApiProperty()O
  @IsNotEmpty()
  hash: string;
}
