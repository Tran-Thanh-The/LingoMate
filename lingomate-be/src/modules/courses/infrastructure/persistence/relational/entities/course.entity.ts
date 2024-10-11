import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { StatusEntity } from "../../../../../../statuses/infrastructure/persistence/relational/entities/status.entity";
import { EntityRelationalHelper } from "../../../../../../utils/relational-entity-helper";
import { FileEntity } from "src/files/infrastructure/persistence/relational/entities/file.entity";
  
  @Entity({
    name: "course",
  })
  export class CourseEntity extends EntityRelationalHelper {
    @ApiProperty({
      type: Number,
      example: 1,
    })
    @PrimaryGeneratedColumn()
    id: number;
  
    @ApiProperty({
      type: String,
      example: "Introduction to TypeScript",
    })
    @Column({ type: String })
    @Expose()
    name: string;
  
    @ApiProperty({
      type: () => StatusEntity,
    })
    @ManyToOne(() => StatusEntity, {
      eager: true,
    })
    status?: StatusEntity;
    
    @ApiProperty({
    type: () => FileEntity,
    })
    @OneToOne(() => FileEntity, {
    eager: true,
    })
    @JoinColumn()
    photo?: FileEntity | null;

    @ApiProperty({
      type: Number,
      example: 99.99,
    })
    @Column({ type: "decimal", precision: 10, scale: 2 })
    @Expose()
    price: number;
  
    @ApiProperty({
      type: String,
      example: "A comprehensive course on TypeScript fundamentals.",
    })
    @Column({ type: String, nullable: true })
    @Expose()
    description?: string;
  
    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date;
  
    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date;
  
    @ApiProperty()
    @DeleteDateColumn()
    deletedAt: Date;
  }