import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EntityRelationalHelper } from "@/utils/relational-entity-helper";
import { ApiProperty } from "@nestjs/swagger";
import { QuestionEntity } from "@/domain/questions/infrastructure/persistence/relational/entities/question.entity";
import { AnswerTypesEnum } from "@/common/enums/answer.enum";
import { StatusEnum } from "@/common/enums/status.enum";

@Entity({
  name: "answer",
})
export class AnswerEntity extends EntityRelationalHelper {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({
    enum: AnswerTypesEnum,
  })
  @Column({
    type: "enum",
    enum: AnswerTypesEnum,
  })
  answerType: AnswerTypesEnum;

  @ApiProperty({ type: String })
  @Column({ type: String })
  answerAudio: string;

  @ApiProperty({ type: String })
  @Column({ type: String })
  answerText: string;

  @ApiProperty({ type: Boolean })
  @Column({ type: Boolean })
  isCorrect: boolean;

  @ApiProperty({ type: Number })
  @Column({ type: "int", nullable: false })
  position: number;

  @ApiProperty({
    type: () => QuestionEntity,
  })
  @ManyToOne(() => QuestionEntity, {
    eager: true,
  })
  question?: QuestionEntity | null;

  @ApiProperty({
    enum: StatusEnum,
  })
  @Column({
    type: "enum",
    enum: StatusEnum,
    default: StatusEnum.Active,
  })
  status: StatusEnum;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
