import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeToFullNameAndAddDOB1728280142540 implements MigrationInterface {
    name = 'ChangeToFullNameAndAddDOB1728280142540'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_58e4dbff0e1a32a9bdc861bb29"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f0e1b4ecdca13b177e2e3a0613"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "fullName" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "dob" TIMESTAMP`);
        await queryRunner.query(`CREATE INDEX "IDX_035190f70c9aff0ef331258d28" ON "user" ("fullName") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_035190f70c9aff0ef331258d28"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "dob"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fullName"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastName" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstName" character varying`);
        await queryRunner.query(`CREATE INDEX "IDX_f0e1b4ecdca13b177e2e3a0613" ON "user" ("lastName") `);
        await queryRunner.query(`CREATE INDEX "IDX_58e4dbff0e1a32a9bdc861bb29" ON "user" ("firstName") `);
    }

}
