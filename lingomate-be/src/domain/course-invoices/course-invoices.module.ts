import { Module } from "@nestjs/common";
import { CourseInvoicesService } from "./course-invoices.service";
import { CourseInvoicesController } from "./course-invoices.controller";
import { RelationalCourseInvoicesPersistenceModule } from "./infrastructure/persistence/relational/relational-persistence.module";

@Module({
  imports: [RelationalCourseInvoicesPersistenceModule],
  controllers: [CourseInvoicesController],
  providers: [CourseInvoicesService],
  exports: [CourseInvoicesService, RelationalCourseInvoicesPersistenceModule],
})
export class CourseInvoicesModule {}
