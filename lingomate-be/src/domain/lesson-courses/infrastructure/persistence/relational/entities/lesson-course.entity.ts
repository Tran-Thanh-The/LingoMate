import { StatusEnum } from "@/common/enums/status.enum";
import { CourseEntity } from "@/domain/courses/infrastructure/persistence/relational/entities/course.entity";
import { LessonEntity } from "@/domain/lessons/infrastructure/persistence/relational/entities/lesson.entity";
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
  name: "lesson_course",
})
export class LessonCourseEntity extends EntityRelationalHelper {
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
    type: () => CourseEntity,
  })
  @ManyToOne(() => CourseEntity, {
    eager: true,
  })
  course: CourseEntity;

  @ApiProperty({
    enum: StatusEnum,
  })
  @Column({
    type: "enum",
    enum: StatusEnum,
    default: StatusEnum.InActive,
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
