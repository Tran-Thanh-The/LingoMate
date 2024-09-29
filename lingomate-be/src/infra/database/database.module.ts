/* eslint-disable @typescript-eslint/no-unused-vars */
import { DynamicModule, Module } from '@nestjs/common';
import { PostgresModule } from './postgressql/postgres.module';

interface DatabaseOptions {
  type: 'postgres';
  global?: boolean;
}

@Module({})
export class DatabaseModule {
  static async register({
    global = false,
    type,
  }: DatabaseOptions): Promise<DynamicModule> {
    return {
      global,
      module: DatabaseModule,
      imports: [PostgresModule],
      exports: [PostgresModule],
    };
  }
}
