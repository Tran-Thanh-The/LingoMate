import { LessonTypesEnum } from "@/common/enums/lesson.enum";
import { StatusEnum } from "@/common/enums/status.enum";
import { LessonCourseEntity } from "@/domain/lesson-courses/infrastructure/persistence/relational/entities/lesson-course.entity";
import { QuestionLessonEntity } from "@/domain/question-lessons/infrastructure/persistence/relational/entities/question-lesson.entity";
import { UserLessonEntity } from "@/domain/user-lessons/infrastructure/persistence/relational/entities/user-lesson.entity";
import { EntityRelationalHelper } from "@/utils/relational-entity-helper";
import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({
  name: "lesson",
})
export class LessonEntity extends EntityRelationalHelper {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({
    type: String,
  })
  @Column({ type: String })
  title: string;

  @ApiProperty({
    type: String,
  })
  @Column({ type: String, nullable: true })
  content?: string | null;

  @ApiProperty({
    type: String,
  })
  @Column({ type: String, nullable: true })
  videoUrl?: string | null;

  @ApiProperty({
    enum: LessonTypesEnum,
  })
  @Column({
    type: "enum",
    enum: LessonTypesEnum,
  })
  lessonType: LessonTypesEnum;

  @ApiProperty({
    enum: StatusEnum,
  })
  @Column({
    type: "enum",
    enum: StatusEnum,
    default: StatusEnum.Active,
  })
  status: StatusEnum;

  @OneToMany(
    () => QuestionLessonEntity,
    (questionLesson) => questionLesson.lesson,
    { cascade: true },
  )
  questionLesson: QuestionLessonEntity[];

  @OneToMany(() => UserLessonEntity, (userLesson) => userLesson.lesson, {
    cascade: true,
  })
  userLesson: UserLessonEntity[];

  @OneToMany(
    () => LessonCourseEntity,
    (lessonCourses) => lessonCourses.lesson,
    {
      cascade: true,
    },
  )
  lessonCourses: LessonCourseEntity[];

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty()
  @DeleteDateColumn()
  deletedAt?: Date | null;
}
