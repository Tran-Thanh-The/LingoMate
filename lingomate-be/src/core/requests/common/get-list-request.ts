import { ApiProperty } from '@nestjs/swagger';

export class GetListRequest {
  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ example: 10 })
  size: number;

  @ApiProperty({ example: '_id' })
  sort_by: string;

  @ApiProperty({ example: 'asc' })
  sort_order: 'asc' | 'desc';
}
