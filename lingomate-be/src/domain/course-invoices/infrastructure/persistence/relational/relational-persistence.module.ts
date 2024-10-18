import { Module } from "@nestjs/common";
import { CourseInvoicesRepository } from "../course-invoices.repository";
import { CourseInvoicesRelationalRepository } from "./repositories/course-invoices.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseInvoicesEntity } from "./entities/course-invoices.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CourseInvoicesEntity])],
  providers: [
    {
      provide: CourseInvoicesRepository,
      useClass: CourseInvoicesRelationalRepository,
    },
  ],
  exports: [CourseInvoicesRepository],
})
export class RelationalCourseInvoicesPersistenceModule {}
