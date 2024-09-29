import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { RecordStatus } from '../constants/record-status';

export class BaseEntityExtended extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;

  @Column({ name: 'created_by', default: 'system' })
  createdBy: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updatedAt: Date;

  @Column({ name: 'updated_by', default: 'system' })
  updatedBy: string;

  @Column({
    type: 'enum',
    enum: RecordStatus,
    default: RecordStatus.ACTIVE,
    name: 'record_status',
  })
  recordStatus: string;
}
