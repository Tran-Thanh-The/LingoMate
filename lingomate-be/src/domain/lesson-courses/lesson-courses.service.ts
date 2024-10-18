import { Injectable } from "@nestjs/common";
import { CreateLessonCourseDto } from "./dto/create-lesson-course.dto";
import { UpdateLessonCourseDto } from "./dto/update-lesson-course.dto";
import { LessonCourseRepository } from "./infrastructure/persistence/lesson-course.repository";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { LessonCourse } from "./domain/lesson-course";
import { LessonCourseMapper } from "./infrastructure/persistence/relational/mappers/lesson-course.mapper";

@Injectable()
export class LessonCoursesService {
  constructor(
    private readonly lessonCourseRepository: LessonCourseRepository,
  ) {}

  create(createLessonCourseDto: CreateLessonCourseDto) {
    const model = LessonCourseMapper.toModel(createLessonCourseDto);
    return this.lessonCourseRepository.create(model);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.lessonCourseRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: LessonCourse["id"]) {
    return this.lessonCourseRepository.findById(id);
  }

  update(id: LessonCourse["id"], updateLessonCourseDto: UpdateLessonCourseDto) {
    return this.lessonCourseRepository.update(id, updateLessonCourseDto);
  }

  remove(id: LessonCourse["id"]) {
    return this.lessonCourseRepository.remove(id);
  }
}
