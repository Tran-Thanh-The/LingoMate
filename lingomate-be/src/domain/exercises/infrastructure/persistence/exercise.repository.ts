import { DeepPartial } from "@/utils/types/deep-partial.type";
import { NullableType } from "@/utils/types/nullable.type";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { Exercise } from "../../domain/exercise";

export abstract class ExerciseRepository {
  abstract create(
    data: Omit<Exercise, "id" | "createdAt" | "updatedAt">,
  ): Promise<Exercise>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Exercise[]>;

  abstract findById(id: Exercise["id"]): Promise<NullableType<Exercise>>;

  abstract update(
    id: Exercise["id"],
    payload: DeepPartial<Exercise>,
  ): Promise<Exercise | null>;

  abstract remove(id: Exercise["id"]): Promise<void>;
}
