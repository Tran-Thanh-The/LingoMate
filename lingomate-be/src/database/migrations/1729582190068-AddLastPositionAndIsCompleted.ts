import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLastPositionAndIsCompleted1729582190068
  implements MigrationInterface
{
  name = "AddLastPositionAndIsCompleted1729582190068";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_lesson" ADD "isCompleted" boolean NOT NULL DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_course" ADD "lastPosition" integer`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_course" DROP COLUMN "lastPosition"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_lesson" DROP COLUMN "isCompleted"`,
    );
  }
}
