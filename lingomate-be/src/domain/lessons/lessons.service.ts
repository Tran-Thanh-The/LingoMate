import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateLessonDto } from "./dto/create-lesson.dto";
import { UpdateLessonDto } from "./dto/update-lesson.dto";
import { LessonRepository } from "./infrastructure/persistence/lesson.repository";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { Lesson } from "./domain/lesson";
import { LessonCourseRepository } from "../lesson-courses/infrastructure/persistence/lesson-course.repository";
import { LessonCourseMapper } from "../lesson-courses/infrastructure/persistence/relational/mappers/lesson-course.mapper";
import { LessonMapper } from "./infrastructure/persistence/relational/mappers/lesson.mapper";
import { StatusEnum } from "@/common/enums/status.enum";
import { CourseRepository } from "../courses/infrastructure/persistence/course.repository";

@Injectable()
export class LessonsService {
  constructor(
    private readonly lessonRepository: LessonRepository,
    private readonly lessonCourseRepository: LessonCourseRepository,
    private readonly courseRepository: CourseRepository,
  ) {}

  async create(courseId: string, createLessonDto: CreateLessonDto) {
    const course = await this.courseRepository.findOne(courseId);
    if (!course) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }
    const existingLesson = await this.lessonRepository.findByTitle(
      createLessonDto.title,
    );
    if (existingLesson) {
      throw new ConflictException(
        `Lesson with title "${createLessonDto.title}" already exists.`,
      );
    }

    const model = LessonMapper.toModel(createLessonDto);
    model.status = StatusEnum.ACTIVE;
    const savedLesson = await this.lessonRepository.create(model);
    if (courseId) {
      const ACTIVECount =
        await this.lessonCourseRepository.countACTIVELessonsByCourseId(
          courseId,
        );
      const newPosition = ACTIVECount + 1;

      const lessonCourse = LessonCourseMapper.toModel({
        course_id: courseId,
        lesson_id: savedLesson.id,
        position: newPosition,
        status: StatusEnum.ACTIVE,
      });
      await this.lessonCourseRepository.create(lessonCourse);
    }

    return savedLesson;
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.lessonRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Lesson["id"]) {
    return this.lessonRepository.findById(id);
  }

  async update(id: Lesson["id"], updateLessonDto: UpdateLessonDto) {
    const existingLesson = await this.lessonRepository.findById(id);
    if (!existingLesson) {
      throw new NotFoundException(`Lesson with id "${id}" not found.`);
    }

    return this.lessonRepository.update(id, updateLessonDto);
  }

  async remove(id: Lesson["id"]) {
    const lessonCourse = await this.lessonCourseRepository.findByLessonId(id);
    if (!lessonCourse) {
      throw new NotFoundException(
        `No lesson course found for lesson with id "${id}".`,
      );
    }

    lessonCourse.status = StatusEnum.IN_ACTIVE;
    const lesson = await this.lessonRepository.findById(id);
    if (!lesson) {
      throw new NotFoundException(
        `No lesson found for lesson with id "${id}".`,
      );
    }
    lesson.status = StatusEnum.IN_ACTIVE;
    await this.lessonRepository.save(lesson);
    await this.lessonCourseRepository.save(lessonCourse);

    const remainingLessons =
      await this.lessonCourseRepository.findACTIVELessonsByCourseId(
        lessonCourse.course.id,
      );

    for (let index = 0; index < remainingLessons.length; index++) {
      remainingLessons[index].position = index + 1;
      await this.lessonCourseRepository.save(remainingLessons[index]);
    }
  }
}
