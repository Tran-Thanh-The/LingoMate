import { DeepPartial } from "@/utils/types/deep-partial.type";
import { NullableType } from "@/utils/types/nullable.type";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { LessonCourse } from "../../domain/lesson-course";
import { Lesson } from "@/domain/lessons/domain/lesson";

export abstract class LessonCourseRepository {
  abstract create(
    data: Omit<LessonCourse, "id" | "createdAt" | "updatedAt">,
  ): Promise<LessonCourse>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<LessonCourse[]>;

  abstract findById(
    id: LessonCourse["id"],
  ): Promise<NullableType<LessonCourse>>;

  abstract findByCourseId(
    course_id: string,
  ): Promise<NullableType<LessonCourse[]>>;

  abstract update(
    id: LessonCourse["id"],
    payload: DeepPartial<LessonCourse>,
  ): Promise<LessonCourse | null>;

  abstract remove(id: LessonCourse["id"]): Promise<void>;

  abstract findByCourseAndLesson(
    courseId: string,
    lessonId: string,
  ): Promise<NullableType<LessonCourse>>;

  abstract findLessonByCourseId(
    course_id: string,
  ): Promise<NullableType<Lesson[]>>;
}
