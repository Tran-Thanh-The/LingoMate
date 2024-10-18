import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserInvoicesEntity } from "../entities/user-invoices.entity";
import { NullableType } from "@/utils/types/nullable.type";
import { UserInvoicesRepository } from "../../user-invoices.repository";
import { UserInvoicesMapper } from "../mappers/user-invoices.mapper";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { UserInvoices } from "@/domain/user-invoices/domain/user-invoices";

@Injectable()
export class UserInvoicesRelationalRepository
  implements UserInvoicesRepository
{
  constructor(
    @InjectRepository(UserInvoicesEntity)
    private readonly userInvoicesRepository: Repository<UserInvoicesEntity>,
  ) {}

  async create(data: UserInvoices): Promise<UserInvoices> {
    const persistenceModel = UserInvoicesMapper.toPersistence(data);
    const newEntity = await this.userInvoicesRepository.save(
      this.userInvoicesRepository.create(persistenceModel),
    );
    return UserInvoicesMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<UserInvoices[]> {
    const entities = await this.userInvoicesRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => UserInvoicesMapper.toDomain(entity));
  }

  async findById(id: UserInvoices["id"]): Promise<NullableType<UserInvoices>> {
    const entity = await this.userInvoicesRepository.findOne({
      where: { id },
    });

    return entity ? UserInvoicesMapper.toDomain(entity) : null;
  }

  async update(
    id: UserInvoices["id"],
    payload: Partial<UserInvoices>,
  ): Promise<UserInvoices> {
    const entity = await this.userInvoicesRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error("Record not found");
    }

    const updatedEntity = await this.userInvoicesRepository.save(
      this.userInvoicesRepository.create(
        UserInvoicesMapper.toPersistence({
          ...UserInvoicesMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return UserInvoicesMapper.toDomain(updatedEntity);
  }

  async remove(id: UserInvoices["id"]): Promise<void> {
    await this.userInvoicesRepository.delete(id);
  }
}
