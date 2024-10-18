import { DeepPartial } from "@/utils/types/deep-partial.type";
import { NullableType } from "@/utils/types/nullable.type";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { UserInvoices } from "../../domain/user-invoices";

export abstract class UserInvoicesRepository {
  abstract create(
    data: Omit<UserInvoices, "id" | "createdAt" | "updatedAt" | "deletedAt">,
  ): Promise<UserInvoices>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<UserInvoices[]>;

  abstract findById(
    id: UserInvoices["id"],
  ): Promise<NullableType<UserInvoices>>;

  abstract update(
    id: UserInvoices["id"],
    payload: DeepPartial<UserInvoices>,
  ): Promise<UserInvoices | null>;

  abstract remove(id: UserInvoices["id"]): Promise<void>;
}
