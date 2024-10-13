// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from "@nestjs/swagger";
import { CreateAnswerDto } from "./create-answer.dto";

export class UpdateAnswerDto extends PartialType(CreateAnswerDto) {}
