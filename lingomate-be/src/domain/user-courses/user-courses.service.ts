import { IPaginationOptions } from "@/utils/types/pagination-options";
import { Injectable } from "@nestjs/common";
import { UserCourse } from "./domain/user-course";
import { CreateUserCourseDto } from "./dto/create-user-course.dto";
import { UpdateUserCourseDto } from "./dto/update-user-course.dto";
import { UserCourseMapper } from "./infrastructure/persistence/relational/mappers/user-course.mapper";
import { UserCourseRepository } from "./infrastructure/persistence/user-course.repository";

@Injectable()
export class UserCoursesService {
  constructor(private readonly userCourseRepository: UserCourseRepository) {}

  create(createUserCourseDto: CreateUserCourseDto) {
    const model = UserCourseMapper.toModel(createUserCourseDto);
    return this.userCourseRepository.create(model);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.userCourseRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: UserCourse["id"]) {
    return this.userCourseRepository.findById(id);
  }

  update(id: UserCourse["id"], updateUserCourseDto: UpdateUserCourseDto) {
    return this.userCourseRepository.update(id, updateUserCourseDto);
  }

  remove(id: UserCourse["id"]) {
    return this.userCourseRepository.remove(id);
  }
}
