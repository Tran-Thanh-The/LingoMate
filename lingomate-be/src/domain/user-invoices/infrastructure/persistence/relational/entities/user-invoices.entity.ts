import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EntityRelationalHelper } from "@/utils/relational-entity-helper";
import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "@/domain/users/infrastructure/persistence/relational/entities/user.entity";
import { InvoiceEntity } from "@/domain/invoices/infrastructure/persistence/relational/entities/invoice.entity";

@Entity({
  name: "user_invoices",
})
export class UserInvoicesEntity extends EntityRelationalHelper {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({
    type: () => UserEntity,
  })
  @ManyToOne(() => UserEntity, {
    eager: true,
  })
  user: UserEntity;

  @ApiProperty({
    type: () => InvoiceEntity,
  })
  @ManyToOne(() => InvoiceEntity, {
    eager: true,
  })
  invoice: InvoiceEntity;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  deletedAt: Date;
}
