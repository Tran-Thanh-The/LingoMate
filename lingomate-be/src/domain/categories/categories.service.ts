import { ConflictException, Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { CategoryRepository } from "./infrastructure/persistence/category.repository";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { Category } from "./domain/category";

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const existingCategory = await this.categoryRepository.findByName(
      createCategoryDto.name,
    );
    if (existingCategory) {
      throw new ConflictException(
        `Category with name "${createCategoryDto.name}" already exists.`,
      );
    }
    return this.categoryRepository.create(createCategoryDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.categoryRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Category["id"]) {
    return this.categoryRepository.findById(id);
  }

  update(id: Category["id"], updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  remove(id: Category["id"]) {
    return this.categoryRepository.remove(id);
  }
}
