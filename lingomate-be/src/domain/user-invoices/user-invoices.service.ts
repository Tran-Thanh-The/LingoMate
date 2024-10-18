import { Injectable } from "@nestjs/common";
import { CreateUserInvoicesDto } from "./dto/create-user-invoices.dto";
import { UpdateUserInvoicesDto } from "./dto/update-user-invoices.dto";
import { UserInvoicesRepository } from "./infrastructure/persistence/user-invoices.repository";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { UserInvoices } from "./domain/user-invoices";
import { UserInvoicesMapper } from "./infrastructure/persistence/relational/mappers/user-invoices.mapper";

@Injectable()
export class UserInvoicesService {
  constructor(
    private readonly userInvoicesRepository: UserInvoicesRepository,
  ) {}

  create(createUserInvoicesDto: CreateUserInvoicesDto) {
    const model = UserInvoicesMapper.toModel(createUserInvoicesDto);
    return this.userInvoicesRepository.create(model);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.userInvoicesRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: UserInvoices["id"]) {
    return this.userInvoicesRepository.findById(id);
  }

  update(id: UserInvoices["id"], updateUserInvoicesDto: UpdateUserInvoicesDto) {
    return this.userInvoicesRepository.update(id, updateUserInvoicesDto);
  }

  remove(id: UserInvoices["id"]) {
    return this.userInvoicesRepository.remove(id);
  }
}
