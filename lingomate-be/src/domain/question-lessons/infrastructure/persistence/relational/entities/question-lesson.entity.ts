import { StatusEnum } from "@/common/enums/status.enum";
import { LessonEntity } from "@/domain/lessons/infrastructure/persistence/relational/entities/lesson.entity";
import { QuestionEntity } from "@/domain/questions/infrastructure/persistence/relational/entities/question.entity";
import { EntityRelationalHelper } from "@/utils/relational-entity-helper";
import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({
  name: "question_lesson",
})
export class QuestionLessonEntity extends EntityRelationalHelper {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({
    type: () => LessonEntity,
  })
  @ManyToOne(() => LessonEntity, {
    eager: true,
  })
  lesson: LessonEntity;

  @ApiProperty({
    type: () => QuestionEntity,
  })
  @ManyToOne(() => QuestionEntity, {
    eager: true,
  })
  question: QuestionEntity;

  @ApiProperty({
    enum: StatusEnum,
  })
  @Column({
    type: "enum",
    enum: StatusEnum,
    default: StatusEnum.Active,
  })
  status: StatusEnum;

  @ApiProperty({
    type: Number,
  })
  @Column({ type: "int", nullable: false })
  position: number;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
