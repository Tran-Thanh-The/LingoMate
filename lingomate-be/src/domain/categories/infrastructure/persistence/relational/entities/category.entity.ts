import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EntityRelationalHelper } from "@/utils/relational-entity-helper";
import { ApiProperty } from "@nestjs/swagger";
import { QuestionEntity } from "@/domain/questions/infrastructure/persistence/relational/entities/question.entity";
import { CourseEntity } from "@/domain/courses/infrastructure/persistence/relational/entities/course.entity";

@Entity({
  name: "category",
})
export class CategoryEntity extends EntityRelationalHelper {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({ type: String })
  @Column({ type: String })
  name: string;

  @OneToMany(() => QuestionEntity, (question) => question.category, {
    cascade: true,
  })
  question: QuestionEntity[];

  @OneToMany(() => CourseEntity, (course) => course.category, {
    cascade: true,
  })
  course: CourseEntity[];

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
