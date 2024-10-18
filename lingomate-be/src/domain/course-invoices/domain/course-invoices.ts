import { CourseEntity } from "@/domain/courses/infrastructure/persistence/relational/entities/course.entity";
import { UserInvoicesEntity } from "@/domain/user-invoices/infrastructure/persistence/relational/entities/user-invoices.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CourseInvoices {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: () => CourseEntity,
  })
  course: CourseEntity;

  @ApiProperty({
    type: () => UserInvoicesEntity,
  })
  userInvoices: UserInvoicesEntity;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
