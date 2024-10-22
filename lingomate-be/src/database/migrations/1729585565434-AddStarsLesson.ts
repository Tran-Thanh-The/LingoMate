import { MigrationInterface, QueryRunner } from "typeorm";

export class AddStarsLesson1729585565434 implements MigrationInterface {
  name = "AddStarsLesson1729585565434";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lesson" ALTER COLUMN "stars" SET DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lesson" ALTER COLUMN "stars" DROP DEFAULT`,
    );
  }
}
