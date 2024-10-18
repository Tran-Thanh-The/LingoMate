import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CourseInvoicesEntity } from "../entities/course-invoices.entity";
import { NullableType } from "@/utils/types/nullable.type";
import { CourseInvoicesRepository } from "../../course-invoices.repository";
import { CourseInvoicesMapper } from "../mappers/course-invoices.mapper";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { CourseInvoices } from "@/domain/course-invoices/domain/course-invoices";

@Injectable()
export class CourseInvoicesRelationalRepository
  implements CourseInvoicesRepository
{
  constructor(
    @InjectRepository(CourseInvoicesEntity)
    private readonly courseInvoicesRepository: Repository<CourseInvoicesEntity>,
  ) {}

  async create(data: CourseInvoices): Promise<CourseInvoices> {
    const persistenceModel = CourseInvoicesMapper.toPersistence(data);
    const newEntity = await this.courseInvoicesRepository.save(
      this.courseInvoicesRepository.create(persistenceModel),
    );
    return CourseInvoicesMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<CourseInvoices[]> {
    const entities = await this.courseInvoicesRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => CourseInvoicesMapper.toDomain(entity));
  }

  async findById(
    id: CourseInvoices["id"],
  ): Promise<NullableType<CourseInvoices>> {
    const entity = await this.courseInvoicesRepository.findOne({
      where: { id },
    });

    return entity ? CourseInvoicesMapper.toDomain(entity) : null;
  }

  async update(
    id: CourseInvoices["id"],
    payload: Partial<CourseInvoices>,
  ): Promise<CourseInvoices> {
    const entity = await this.courseInvoicesRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error("Record not found");
    }

    const updatedEntity = await this.courseInvoicesRepository.save(
      this.courseInvoicesRepository.create(
        CourseInvoicesMapper.toPersistence({
          ...CourseInvoicesMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return CourseInvoicesMapper.toDomain(updatedEntity);
  }

  async remove(id: CourseInvoices["id"]): Promise<void> {
    await this.courseInvoicesRepository.delete(id);
  }
}
