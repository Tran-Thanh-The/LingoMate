// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from "@nestjs/swagger";
import { CreateUserQuestionDto } from "./create-user-question.dto";

export class UpdateUserQuestionDto extends PartialType(CreateUserQuestionDto) {}
