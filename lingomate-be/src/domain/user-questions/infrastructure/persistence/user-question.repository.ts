import { DeepPartial } from "@/utils/types/deep-partial.type";
import { NullableType } from "@/utils/types/nullable.type";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { UserQuestion } from "../../domain/user-question";

export abstract class UserQuestionRepository {
  abstract create(
    data: Omit<UserQuestion, "id" | "createdAt" | "updatedAt">,
  ): Promise<UserQuestion>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<UserQuestion[]>;

  abstract findById(
    id: UserQuestion["id"],
  ): Promise<NullableType<UserQuestion>>;

  abstract update(
    id: UserQuestion["id"],
    payload: DeepPartial<UserQuestion>,
  ): Promise<UserQuestion | null>;

  abstract remove(id: UserQuestion["id"]): Promise<void>;
}
