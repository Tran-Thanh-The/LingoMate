import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Transform } from "class-transformer";
import { lowerCaseTransformer } from "../../utils/transformers/lower-case.transformer";

export class AuthRegisterLoginDto {
  @ApiProperty({ example: "test1@example.com", type: String })
  @Transform(lowerCaseTransformer)
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @MinLength(6)
  confirmPassword: string;

  @ApiProperty({ example: "John Doe" })
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    example: new Date("1990-01-01"),
    type: Date,
  })
  @IsNotEmpty()
  dob: Date;
}
