import { NullableType } from "@/utils/types/nullable.type";
import { IPaginationOptions } from "@/utils/types/pagination-options";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Course } from "../../../../domain/course";
import { CourseRepository } from "../../course.repository";
import { CourseEntity } from "../entities/course.entity";
import { CourseMapper } from "../mappers/course.mapper";
import { CourseWithDetailsDTO } from "@/domain/courses/dto/course-details-dto";
import { LessonMapper } from "@/domain/lessons/infrastructure/persistence/relational/mappers/lesson.mapper";
import { StatusEnum } from "@/common/enums/status.enum";
import { UserCourseEntity } from "@/domain/user-courses/infrastructure/persistence/relational/entities/user-course.entity";
import { isUUID } from "class-validator";

@Injectable()
export class CourseRelationalRepository implements CourseRepository {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
    @InjectRepository(UserCourseEntity)
    private readonly userCourseRepository: Repository<UserCourseEntity>,
  ) {}

  async create(data: Course): Promise<Course> {
    const persistenceModel = CourseMapper.toPersistence(data);
    const newEntity = await this.courseRepository.save(
      this.courseRepository.create(persistenceModel),
    );
    return CourseMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Course[]> {
    const entities = await this.courseRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => CourseMapper.toDomain(entity));
  }

  async findById(id: Course["id"]): Promise<NullableType<Course>> {
    const entity = await this.courseRepository.findOne({
      where: { id },
    });

    return entity ? CourseMapper.toDomain(entity) : null;
  }

  async findByName(name: Course["name"]): Promise<NullableType<Course>> {
    const entity = await this.courseRepository.findOne({
      where: { name },
    });

    return entity ? CourseMapper.toDomain(entity) : null;
  }

  async update(id: Course["id"], payload: Partial<Course>): Promise<Course> {
    const entity = await this.courseRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error("Record not found");
    }

    const updatedEntity = await this.courseRepository.save(
      this.courseRepository.create(
        CourseMapper.toPersistence({
          ...CourseMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return CourseMapper.toDomain(updatedEntity);
  }

  async remove(id: Course["id"]): Promise<void> {
    await this.courseRepository.delete(id);
  }

  async save(course: Course): Promise<void> {
    if (!course || !course.id) {
      throw new NotFoundException("Course not found");
    }
    await this.courseRepository.save(course);
  }

  async findOne(id: string, relations: string[] = []): Promise<Course | null> {
    const course = await this.courseRepository.findOne({
      where: { id },
      relations,
    });

    return course ? CourseMapper.toDomain(course) : null;
  }

  async getDetailById(id: string): Promise<CourseWithDetailsDTO | null> {
    const courseEntity = await this.courseRepository
      .createQueryBuilder("course")
      .leftJoinAndSelect("course.lessonCourses", "lessonCourse")
      .leftJoinAndSelect("lessonCourse.lesson", "lesson")
      .where("course.id = :id", { id })
      .getOne();

    if (!courseEntity) {
      return null;
    }

    const lessonsDto = courseEntity.lessonCourses.map((lc) =>
      LessonMapper.toDto(lc.lesson),
    );

    return {
      ...CourseMapper.toDto(courseEntity),
      lessons: lessonsDto,
    };
  }

  async getListCourse(params: {
    status?: StatusEnum;
    userId?: string;
    invoiceId?: string;
    paginationOptions?: IPaginationOptions;
    orderBy?: { [key: string]: "ASC" | "DESC" };
  }) {
    const {
      status,
      userId,
      invoiceId,
      paginationOptions,
      orderBy = { createdAt: "DESC" },
    } = params;

    const queryBuilder = this.courseRepository.createQueryBuilder("course");

    if (userId) {
      queryBuilder.leftJoinAndSelect(
        "course.userCourses",
        "userCourse",
        "userCourse.userId = :userId",
        { userId },
      );
    }

    if (invoiceId && isUUID(invoiceId)) {
      queryBuilder
        .leftJoinAndSelect("course.courseInvoices", "courseInvoice")
        .leftJoinAndSelect("courseInvoice.userInvoices", "userInvoices")
        .andWhere("userInvoices.id = :invoiceId", { invoiceId });
    } else if (invoiceId) {
      console.warn(
        `Invalid invoiceId: ${invoiceId}. This condition will be ignored.`,
      );
    }

    if (status) {
      queryBuilder.andWhere("course.status = :status", { status });
    }

    queryBuilder.leftJoinAndSelect("course.category", "category");

    const validColumns = [
      "id",
      "name",
      "price",
      "description",
      "status",
      "createdAt",
      "updatedAt",
    ];
    Object.entries(orderBy).forEach(([key, value]) => {
      if (validColumns.includes(key)) {
        queryBuilder.addOrderBy(`course.${key}`, value);
      }
    });

    const total = await queryBuilder.getCount();

    if (paginationOptions) {
      const { page, limit } = paginationOptions;
      queryBuilder.skip((page - 1) * limit).take(limit);
    }

    const courses = await queryBuilder.getMany();
    const mappedCourses = courses.map((course) =>
      CourseMapper.toDomain(course),
    );

    return {
      data: mappedCourses,
      total,
      page: paginationOptions?.page || 1,
      limit: paginationOptions?.limit || total,
      totalPages: paginationOptions
        ? Math.ceil(total / paginationOptions.limit)
        : 1,
    };
  }
}
