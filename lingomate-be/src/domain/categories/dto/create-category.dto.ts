import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
  // Don't forget to use the class-validator decorators in the DTO properties.
  @ApiProperty({ type: String })
  @IsNotEmpty()
  name: string;
}
