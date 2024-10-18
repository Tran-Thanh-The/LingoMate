import { Injectable } from "@nestjs/common";
import { CreateCourseInvoicesDto } from "./dto/create-course-invoices.dto";
import { UpdateCourseInvoicesDto } from "./dto/update-course-invoices.dto";
import { CourseInvoicesRepository } from "./infrastructure/persistence/course-invoices.repository";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { CourseInvoices } from "./domain/course-invoices";
import { CourseInvoicesMapper } from "./infrastructure/persistence/relational/mappers/course-invoices.mapper";

@Injectable()
export class CourseInvoicesService {
  constructor(
    private readonly courseInvoicesRepository: CourseInvoicesRepository,
  ) {}

  create(createCourseInvoicesDto: CreateCourseInvoicesDto) {
    const model = CourseInvoicesMapper.toModel(createCourseInvoicesDto);
    return this.courseInvoicesRepository.create(model);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.courseInvoicesRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: CourseInvoices["id"]) {
    return this.courseInvoicesRepository.findById(id);
  }

  update(
    id: CourseInvoices["id"],
    updateCourseInvoicesDto: UpdateCourseInvoicesDto,
  ) {
    return this.courseInvoicesRepository.update(id, updateCourseInvoicesDto);
  }

  remove(id: CourseInvoices["id"]) {
    return this.courseInvoicesRepository.remove(id);
  }
}
