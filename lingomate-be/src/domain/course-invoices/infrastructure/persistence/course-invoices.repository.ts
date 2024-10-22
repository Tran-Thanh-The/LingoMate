import { DeepPartial } from "@/utils/types/deep-partial.type";
import { NullableType } from "@/utils/types/nullable.type";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { CourseInvoices } from "../../domain/course-invoices";

export abstract class CourseInvoicesRepository {
  abstract create(
    data: Omit<CourseInvoices, "id" | "createdAt" | "updatedAt" | "deletedAt">,
  ): Promise<CourseInvoices>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<CourseInvoices[]>;

  abstract findById(
    id: CourseInvoices["id"],
  ): Promise<NullableType<CourseInvoices>>;

  abstract update(
    id: CourseInvoices["id"],
    payload: DeepPartial<CourseInvoices>,
  ): Promise<CourseInvoices | null>;

  abstract remove(id: CourseInvoices["id"]): Promise<void>;
}
