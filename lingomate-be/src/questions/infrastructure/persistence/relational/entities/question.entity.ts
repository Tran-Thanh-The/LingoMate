import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EntityRelationalHelper } from "../../../../../utils/relational-entity-helper";
import { ApiProperty } from "@nestjs/swagger";

@Entity({
  name: "question",
})
export class QuestionEntity extends EntityRelationalHelper {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
