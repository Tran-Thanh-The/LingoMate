import { DeepPartial } from "@/utils/types/deep-partial.type";
import { NullableType } from "@/utils/types/nullable.type";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { QuestionLesson } from "../../domain/question-lesson";

export abstract class QuestionLessonRepository {
  abstract create(
    data: Omit<QuestionLesson, "id" | "createdAt" | "updatedAt">,
  ): Promise<QuestionLesson>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<QuestionLesson[]>;

  abstract findById(
    id: QuestionLesson["id"],
  ): Promise<NullableType<QuestionLesson>>;

  abstract update(
    id: QuestionLesson["id"],
    payload: DeepPartial<QuestionLesson>,
  ): Promise<QuestionLesson | null>;

  abstract remove(id: QuestionLesson["id"]): Promise<void>;
}
