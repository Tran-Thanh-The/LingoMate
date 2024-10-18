import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import bcrypt from "bcryptjs";
import { RoleEnum } from "@/domain/roles/roles.enum";
import { StatusEnum } from "@/domain/statuses/statuses.enum";
import { UserEntity } from "@/domain/users/infrastructure/persistence/relational/entities/user.entity";

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async run() {
    const countAdmin = await this.repository.count({
      where: {
        role: {
          id: RoleEnum.admin,
        },
      },
    });

    if (!countAdmin) {
      const salt = await bcrypt.genSalt();
      const password = await bcrypt.hash("string", salt);

      await this.repository.save(
        this.repository.create({
          fullName: "Tien Anh",
          email: "tien226anh@gmail.com",
          password,
          role: {
            id: RoleEnum.admin,
            name: "Admin",
          },
          status: {
            id: StatusEnum.active,
            name: "Active",
          },
        }),
      );
    }

    const countStaff = await this.repository.count({
      where: {
        role: {
          id: RoleEnum.staff,
        },
      },
    });

    if (!countStaff) {
      const salt = await bcrypt.genSalt();
      const password = await bcrypt.hash("string", salt);

      await this.repository.save(
        this.repository.create({
          fullName: "Leaping",
          email: "leaping226@gmail.com",
          password,
          role: {
            id: RoleEnum.staff,
            name: "Staff",
          },
          status: {
            id: StatusEnum.active,
            name: "Active",
          },
        }),
      );
    }
  }
}
