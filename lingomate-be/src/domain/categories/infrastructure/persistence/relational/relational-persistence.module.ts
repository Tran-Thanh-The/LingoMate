import { Module } from "@nestjs/common";
import { CategoryRepository } from "../category.repository";
import { CategoryRelationalRepository } from "./repositories/category.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryEntity } from "./entities/category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [
    {
      provide: CategoryRepository,
      useClass: CategoryRelationalRepository,
    },
  ],
  exports: [CategoryRepository],
})
export class RelationalCategoryPersistenceModule {}
