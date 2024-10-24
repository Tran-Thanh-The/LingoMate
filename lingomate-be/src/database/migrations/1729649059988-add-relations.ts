import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelations1729649059988 implements MigrationInterface {
  name = "AddRelations1729649059988";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "file" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "path" character varying NOT NULL, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "role" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."answer_answertype_enum" AS ENUM('Choice', 'Paragraph', 'Sentence', 'Audio_sentence', 'Audio_paragraph')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."answer_status_enum" AS ENUM('ACTIVE', 'IN_ACTIVE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "answer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "answerType" "public"."answer_answertype_enum" NOT NULL, "answerAudio" character varying NOT NULL, "answerText" character varying NOT NULL, "isCorrect" boolean NOT NULL, "position" integer NOT NULL, "status" "public"."answer_status_enum" NOT NULL DEFAULT 'ACTIVE', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "questionId" uuid, CONSTRAINT "PK_9232db17b63fb1e94f97e5c224f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."lesson_course_status_enum" AS ENUM('ACTIVE', 'IN_ACTIVE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "lesson_course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."lesson_course_status_enum" NOT NULL DEFAULT 'IN_ACTIVE', "position" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "lessonId" uuid, "courseId" uuid, CONSTRAINT "PK_5b2678a83db14ed1bfe89de5774" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_lesson_status_enum" AS ENUM('ACTIVE', 'IN_ACTIVE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isCompleted" boolean NOT NULL DEFAULT false, "status" "public"."user_lesson_status_enum" NOT NULL DEFAULT 'IN_ACTIVE', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "lessonId" uuid, CONSTRAINT "PK_1c2bd4db4d9d64a1c9ec184b13c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."lesson_lessontype_enum" AS ENUM('Video', 'Docs', 'Exercise')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."lesson_status_enum" AS ENUM('ACTIVE', 'IN_ACTIVE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "content" character varying, "videoUrl" character varying, "lessonType" "public"."lesson_lessontype_enum" NOT NULL, "status" "public"."lesson_status_enum" NOT NULL DEFAULT 'ACTIVE', "stars" numeric(5,2) DEFAULT '0', "totalStars" integer DEFAULT '3', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."question_lesson_status_enum" AS ENUM('ACTIVE', 'IN_ACTIVE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "question_lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."question_lesson_status_enum" NOT NULL DEFAULT 'ACTIVE', "position" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "lessonId" uuid, "questionId" uuid, CONSTRAINT "PK_8be709902b1e0f219efa28d7389" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_question_status_enum" AS ENUM('ACTIVE', 'IN_ACTIVE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."user_question_status_enum" NOT NULL DEFAULT 'IN_ACTIVE', "answerPick" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "questionId" uuid, CONSTRAINT "PK_4820ee76ad0ee4e537f1bdb4985" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."question_questiontype_enum" AS ENUM('Choice', 'Paragraph', 'Sentence', 'Audio_sentence', 'Audio_paragraph')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."question_status_enum" AS ENUM('ACTIVE', 'IN_ACTIVE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "audioUrl" character varying NOT NULL, "questionType" "public"."question_questiontype_enum" NOT NULL, "status" "public"."question_status_enum" NOT NULL DEFAULT 'ACTIVE', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "categoryId" uuid, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "course_invoices" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "courseId" uuid, "userInvoicesId" uuid, CONSTRAINT "PK_c7ddfe322b80290efec15f74ca2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."course_status_enum" AS ENUM('ACTIVE', 'IN_ACTIVE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "description" character varying, "status" "public"."course_status_enum" NOT NULL DEFAULT 'IN_ACTIVE', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "photoId" uuid, "categoryId" uuid, CONSTRAINT "REL_08e5a6e400775ffc0697e0f057" UNIQUE ("photoId"), CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_course_status_enum" AS ENUM('ACTIVE', 'IN_ACTIVE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "lastPosition" integer, "status" "public"."user_course_status_enum" NOT NULL DEFAULT 'IN_ACTIVE', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "courseId" uuid, CONSTRAINT "PK_10687f04aeb9fbcb6a6c744ef73" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_status_enum" AS ENUM('ACTIVE', 'IN_ACTIVE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying, "password" character varying, "provider" character varying NOT NULL DEFAULT 'email', "socialId" character varying, "fullName" character varying, "dob" TIMESTAMP, "status" "public"."user_status_enum" NOT NULL DEFAULT 'IN_ACTIVE', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "photoId" uuid, "roleId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_75e2be4ce11d447ef43be0e374" UNIQUE ("photoId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9bd2fe7a8e694dedc4ec2f666f" ON "user" ("socialId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_035190f70c9aff0ef331258d28" ON "user" ("fullName") `,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."invoice_status_enum" AS ENUM('ACTIVE', 'IN_ACTIVE')`,
    );
    await queryRunner.query(
      `CREATE TABLE "invoice" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "money" numeric(10,2) NOT NULL, "status" "public"."invoice_status_enum" NOT NULL DEFAULT 'IN_ACTIVE', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_invoices" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "invoiceId" uuid, CONSTRAINT "PK_cedd26761ec7d6a0772be9f8289" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "session" ("id" SERIAL NOT NULL, "hash" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_3d2f174ef04fb312fdebd0ddc5" ON "session" ("userId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "practice_exercise" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e406dafb8bf3c80482e6b83582c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "exercise" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "answer" ADD CONSTRAINT "FK_a4013f10cd6924793fbd5f0d637" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson_course" ADD CONSTRAINT "FK_cdf7e7e1ea1698055dfa0cd0283" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson_course" ADD CONSTRAINT "FK_11915758c131d220e954d72e919" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_lesson" ADD CONSTRAINT "FK_83cbd2ebf724e51afe91d8205b4" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_lesson" ADD CONSTRAINT "FK_bd8e76fd42a02ed386930662662" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "question_lesson" ADD CONSTRAINT "FK_6322860eb4af9c497b223012be9" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "question_lesson" ADD CONSTRAINT "FK_1db61b5617418af9ed92c0a6543" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_question" ADD CONSTRAINT "FK_64b66c10122a98bb8faaed64857" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_question" ADD CONSTRAINT "FK_a48daec7bfcec8d7edbfc867481" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "question" ADD CONSTRAINT "FK_b8dd754e373b56714ddfa8f545c" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "course_invoices" ADD CONSTRAINT "FK_e6a111fe55827fb2238a55bbeb4" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "course_invoices" ADD CONSTRAINT "FK_2fda76c73d600ee3f3009334165" FOREIGN KEY ("userInvoicesId") REFERENCES "user_invoices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" ADD CONSTRAINT "FK_08e5a6e400775ffc0697e0f0577" FOREIGN KEY ("photoId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" ADD CONSTRAINT "FK_c6c48d73b3b32e47e9cc1cfc4c4" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_course" ADD CONSTRAINT "FK_63b2ec4f34c89d4b1219f85a806" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_course" ADD CONSTRAINT "FK_67a940b1d7b3cc2f0e99ab6d23b" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_75e2be4ce11d447ef43be0e374f" FOREIGN KEY ("photoId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_invoices" ADD CONSTRAINT "FK_9e864a667aefba34622469ab332" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_invoices" ADD CONSTRAINT "FK_20dcb56c2ce229bd5005e512973" FOREIGN KEY ("invoiceId") REFERENCES "invoice"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "session" ADD CONSTRAINT "FK_3d2f174ef04fb312fdebd0ddc53" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "session" DROP CONSTRAINT "FK_3d2f174ef04fb312fdebd0ddc53"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_invoices" DROP CONSTRAINT "FK_20dcb56c2ce229bd5005e512973"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_invoices" DROP CONSTRAINT "FK_9e864a667aefba34622469ab332"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_75e2be4ce11d447ef43be0e374f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_course" DROP CONSTRAINT "FK_67a940b1d7b3cc2f0e99ab6d23b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_course" DROP CONSTRAINT "FK_63b2ec4f34c89d4b1219f85a806"`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" DROP CONSTRAINT "FK_c6c48d73b3b32e47e9cc1cfc4c4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" DROP CONSTRAINT "FK_08e5a6e400775ffc0697e0f0577"`,
    );
    await queryRunner.query(
      `ALTER TABLE "course_invoices" DROP CONSTRAINT "FK_2fda76c73d600ee3f3009334165"`,
    );
    await queryRunner.query(
      `ALTER TABLE "course_invoices" DROP CONSTRAINT "FK_e6a111fe55827fb2238a55bbeb4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "question" DROP CONSTRAINT "FK_b8dd754e373b56714ddfa8f545c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_question" DROP CONSTRAINT "FK_a48daec7bfcec8d7edbfc867481"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_question" DROP CONSTRAINT "FK_64b66c10122a98bb8faaed64857"`,
    );
    await queryRunner.query(
      `ALTER TABLE "question_lesson" DROP CONSTRAINT "FK_1db61b5617418af9ed92c0a6543"`,
    );
    await queryRunner.query(
      `ALTER TABLE "question_lesson" DROP CONSTRAINT "FK_6322860eb4af9c497b223012be9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_lesson" DROP CONSTRAINT "FK_bd8e76fd42a02ed386930662662"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_lesson" DROP CONSTRAINT "FK_83cbd2ebf724e51afe91d8205b4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson_course" DROP CONSTRAINT "FK_11915758c131d220e954d72e919"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson_course" DROP CONSTRAINT "FK_cdf7e7e1ea1698055dfa0cd0283"`,
    );
    await queryRunner.query(
      `ALTER TABLE "answer" DROP CONSTRAINT "FK_a4013f10cd6924793fbd5f0d637"`,
    );
    await queryRunner.query(`DROP TABLE "exercise"`);
    await queryRunner.query(`DROP TABLE "practice_exercise"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_3d2f174ef04fb312fdebd0ddc5"`,
    );
    await queryRunner.query(`DROP TABLE "session"`);
    await queryRunner.query(`DROP TABLE "user_invoices"`);
    await queryRunner.query(`DROP TABLE "invoice"`);
    await queryRunner.query(`DROP TYPE "public"."invoice_status_enum"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_035190f70c9aff0ef331258d28"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_9bd2fe7a8e694dedc4ec2f666f"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TYPE "public"."user_status_enum"`);
    await queryRunner.query(`DROP TABLE "user_course"`);
    await queryRunner.query(`DROP TYPE "public"."user_course_status_enum"`);
    await queryRunner.query(`DROP TABLE "course"`);
    await queryRunner.query(`DROP TYPE "public"."course_status_enum"`);
    await queryRunner.query(`DROP TABLE "course_invoices"`);
    await queryRunner.query(`DROP TABLE "category"`);
    await queryRunner.query(`DROP TABLE "question"`);
    await queryRunner.query(`DROP TYPE "public"."question_status_enum"`);
    await queryRunner.query(`DROP TYPE "public"."question_questiontype_enum"`);
    await queryRunner.query(`DROP TABLE "user_question"`);
    await queryRunner.query(`DROP TYPE "public"."user_question_status_enum"`);
    await queryRunner.query(`DROP TABLE "question_lesson"`);
    await queryRunner.query(`DROP TYPE "public"."question_lesson_status_enum"`);
    await queryRunner.query(`DROP TABLE "lesson"`);
    await queryRunner.query(`DROP TYPE "public"."lesson_status_enum"`);
    await queryRunner.query(`DROP TYPE "public"."lesson_lessontype_enum"`);
    await queryRunner.query(`DROP TABLE "user_lesson"`);
    await queryRunner.query(`DROP TYPE "public"."user_lesson_status_enum"`);
    await queryRunner.query(`DROP TABLE "lesson_course"`);
    await queryRunner.query(`DROP TYPE "public"."lesson_course_status_enum"`);
    await queryRunner.query(`DROP TABLE "answer"`);
    await queryRunner.query(`DROP TYPE "public"."answer_status_enum"`);
    await queryRunner.query(`DROP TYPE "public"."answer_answertype_enum"`);
    await queryRunner.query(`DROP TABLE "role"`);
    await queryRunner.query(`DROP TABLE "file"`);
  }
}
