import { StatusEnum } from "@/common/enums/status.enum";
import { CategoryEntity } from "@/domain/categories/infrastructure/persistence/relational/entities/category.entity";
import { FileType } from "@/files/domain/file";
import { ApiProperty } from "@nestjs/swagger";

export class Course {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
    description: "Name of the course",
    example: "Introduction to Programming",
  })
  name: string;

  @ApiProperty({
    type: Number,
    description: "Price of the course in dollars, allowing decimal values",
    example: 49.99,
  })
  price: number;

  @ApiProperty({
    type: String,
    description: "Brief description of the course",
    example: "This course covers the fundamentals of programming.",
  })
  description?: string | null;

  @ApiProperty({
    type: () => FileType,
  })
  photo?: FileType | null;

  @ApiProperty({
    enum: StatusEnum,
  })
  status: StatusEnum;

  @ApiProperty({
    type: () => CategoryEntity,
  })
  category: CategoryEntity;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt?: Date | null;
}
