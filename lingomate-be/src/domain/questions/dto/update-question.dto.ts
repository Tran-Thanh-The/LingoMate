// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from "@nestjs/swagger";
import { CreateQuestionDto } from "./create-question.dto";

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}
