import { Injectable } from "@nestjs/common";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { UpdateInvoiceDto } from "./dto/update-invoice.dto";
import { InvoiceRepository } from "./infrastructure/persistence/invoice.repository";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { Invoice } from "./domain/invoice";

@Injectable()
export class InvoicesService {
  constructor(private readonly invoiceRepository: InvoiceRepository) {}

  create(createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceRepository.create(createInvoiceDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.invoiceRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Invoice["id"]) {
    return this.invoiceRepository.findById(id);
  }

  update(id: Invoice["id"], updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoiceRepository.update(id, updateInvoiceDto);
  }

  remove(id: Invoice["id"]) {
    return this.invoiceRepository.remove(id);
  }
}