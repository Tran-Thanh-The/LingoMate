import { LessonCourse } from "@/domain/lesson-courses/domain/lesson-course";
import { Lesson } from "@/domain/lessons/domain/lesson";
import { LessonEntity } from "@/domain/lessons/infrastructure/persistence/relational/entities/lesson.entity";
import { NullableType } from "@/utils/types/nullable.type";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LessonCourseRepository } from "../../lesson-course.repository";
import { LessonCourseEntity } from "../entities/lesson-course.entity";
import { LessonCourseMapper } from "../mappers/lesson-course.mapper";

@Injectable()
export class LessonCourseRelationalRepository
  implements LessonCourseRepository
{
  constructor(
    @InjectRepository(LessonCourseEntity)
    private readonly lessonCourseRepository: Repository<LessonCourseEntity>,
    @InjectRepository(LessonEntity)
    private readonly lessonRepository: Repository<LessonEntity>,
  ) {}

  async create(data: LessonCourse): Promise<LessonCourse> {
    const persistenceModel = LessonCourseMapper.toPersistence(data);
    const newEntity = await this.lessonCourseRepository.save(
      this.lessonCourseRepository.create(persistenceModel),
    );
    return LessonCourseMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<LessonCourse[]> {
    const entities = await this.lessonCourseRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => LessonCourseMapper.toDomain(entity));
  }

  async findById(id: LessonCourse["id"]): Promise<NullableType<LessonCourse>> {
    const entity = await this.lessonCourseRepository.findOne({
      where: { id },
    });

    return entity ? LessonCourseMapper.toDomain(entity) : null;
  }

  async update(
    id: LessonCourse["id"],
    payload: Partial<LessonCourse>,
  ): Promise<LessonCourse> {
    const entity = await this.lessonCourseRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error("Record not found");
    }

    const updatedEntity = await this.lessonCourseRepository.save(
      this.lessonCourseRepository.create(
        LessonCourseMapper.toPersistence({
          ...LessonCourseMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return LessonCourseMapper.toDomain(updatedEntity);
  }

  async remove(id: LessonCourse["id"]): Promise<void> {
    await this.lessonCourseRepository.delete(id);
  }

  async findByCourseAndLesson(
    courseId: string,
    lessonId: string,
  ): Promise<NullableType<LessonCourse>> {
    const entity = await this.lessonCourseRepository.findOne({
      where: {
        course: { id: courseId },
        lesson: { id: lessonId },
      },
      relations: ["course", "lesson"],
    });

    return entity ? LessonCourseMapper.toDomain(entity) : null;
  }

  async findLessonByCourseId(
    course_id: string,
  ): Promise<NullableType<Lesson[]>> {
    const lessons = await this.lessonRepository
      .createQueryBuilder("lesson")
      .leftJoinAndSelect("lesson.lessonCourses", "lessonCourses")
      .leftJoinAndSelect("lessonCourses.course", "course")
      .where("course.id = :course_id", { course_id })
      .getMany();

    return lessons.length ? lessons : null;
  }

  async findByCourseId(
    course_id: string,
  ): Promise<NullableType<LessonCourse[]>> {
    const lessonCourses = await this.lessonCourseRepository
      .createQueryBuilder("lessonCourse")
      .leftJoinAndSelect("lessonCourse.course", "course")
      .where("course.id = :course_id", { course_id })
      .getMany();

    return lessonCourses.length
      ? lessonCourses.map(LessonCourseMapper.toDomain)
      : null;
  }
}
