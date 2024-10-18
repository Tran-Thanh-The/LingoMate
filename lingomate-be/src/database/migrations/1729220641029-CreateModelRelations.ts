import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateModelRelations1729220641029 implements MigrationInterface {
  name = "CreateModelRelations1729220641029";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "course_invoices" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "courseId" uuid, "userInvoicesId" uuid, CONSTRAINT "PK_c7ddfe322b80290efec15f74ca2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."question_lesson_status_enum" AS ENUM('Active', 'InActive')`,
    );
    await queryRunner.query(
      `CREATE TABLE "question_lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."question_lesson_status_enum" NOT NULL DEFAULT 'Active', "position" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "lessonId" uuid, "questionId" uuid, CONSTRAINT "PK_8be709902b1e0f219efa28d7389" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_lesson_status_enum" AS ENUM('Active', 'InActive')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."user_lesson_status_enum" NOT NULL DEFAULT 'InActive', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "lessonId" uuid, CONSTRAINT "PK_1c2bd4db4d9d64a1c9ec184b13c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."lesson_course_status_enum" AS ENUM('Active', 'InActive')`,
    );
    await queryRunner.query(
      `CREATE TABLE "lesson_course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."lesson_course_status_enum" NOT NULL DEFAULT 'InActive', "position" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "lessonId" uuid, "courseId" uuid, CONSTRAINT "PK_5b2678a83db14ed1bfe89de5774" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_course_status_enum" AS ENUM('Active', 'InActive')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."user_course_status_enum" NOT NULL DEFAULT 'InActive', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "courseId" uuid, CONSTRAINT "PK_10687f04aeb9fbcb6a6c744ef73" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_question_status_enum" AS ENUM('Active', 'InActive')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" "public"."user_question_status_enum" NOT NULL DEFAULT 'InActive', "answerPick" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "questionId" uuid, CONSTRAINT "PK_4820ee76ad0ee4e537f1bdb4985" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_invoices" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "invoiceId" uuid, CONSTRAINT "PK_cedd26761ec7d6a0772be9f8289" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."answer_answertype_enum" AS ENUM('Choice', 'Paragraph', 'Sentence', 'Audio_sentence', 'Audio_paragraph')`,
    );
    await queryRunner.query(
      `ALTER TABLE "answer" ADD "answerType" "public"."answer_answertype_enum" NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "answer" ADD "answerAudio" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "answer" ADD "answerText" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "answer" ADD "isCorrect" boolean NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "answer" ADD "position" integer NOT NULL`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."answer_status_enum" AS ENUM('Active', 'InActive')`,
    );
    await queryRunner.query(
      `ALTER TABLE "answer" ADD "status" "public"."answer_status_enum" NOT NULL DEFAULT 'Active'`,
    );
    await queryRunner.query(`ALTER TABLE "answer" ADD "questionId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD "title" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD "content" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD "videoUrl" character varying`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."lesson_lessontype_enum" AS ENUM('Video', 'Docs', 'Exercise')`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD "lessonType" "public"."lesson_lessontype_enum" NOT NULL`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."lesson_status_enum" AS ENUM('Active', 'InActive')`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD "status" "public"."lesson_status_enum" NOT NULL DEFAULT 'Active'`,
    );
    await queryRunner.query(`ALTER TABLE "lesson" ADD "deletedAt" TIMESTAMP`);
    await queryRunner.query(
      `ALTER TABLE "course" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" ADD "price" numeric(10,2) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" ADD "description" character varying`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."course_status_enum" AS ENUM('Active', 'InActive')`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" ADD "status" "public"."course_status_enum" NOT NULL DEFAULT 'InActive'`,
    );
    await queryRunner.query(`ALTER TABLE "course" ADD "deletedAt" TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE "course" ADD "photoId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "course" ADD CONSTRAINT "UQ_08e5a6e400775ffc0697e0f0577" UNIQUE ("photoId")`,
    );
    await queryRunner.query(`ALTER TABLE "course" ADD "categoryId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "question" ADD "title" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "question" ADD "description" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "question" ADD "audioUrl" character varying NOT NULL`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."question_questiontype_enum" AS ENUM('Choice', 'Paragraph', 'Sentence', 'Audio_sentence', 'Audio_paragraph')`,
    );
    await queryRunner.query(
      `ALTER TABLE "question" ADD "questionType" "public"."question_questiontype_enum" NOT NULL`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."question_status_enum" AS ENUM('Active', 'InActive')`,
    );
    await queryRunner.query(
      `ALTER TABLE "question" ADD "status" "public"."question_status_enum" NOT NULL DEFAULT 'Active'`,
    );
    await queryRunner.query(`ALTER TABLE "question" ADD "categoryId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "invoice" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "invoice" ADD "description" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "invoice" ADD "money" numeric(10,2) NOT NULL`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."invoice_status_enum" AS ENUM('Active', 'InActive')`,
    );
    await queryRunner.query(
      `ALTER TABLE "invoice" ADD "status" "public"."invoice_status_enum" NOT NULL DEFAULT 'InActive'`,
    );
    await queryRunner.query(`ALTER TABLE "invoice" ADD "deletedAt" TIMESTAMP`);
    await queryRunner.query(
      `ALTER TABLE "answer" ADD CONSTRAINT "FK_a4013f10cd6924793fbd5f0d637" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "course_invoices" ADD CONSTRAINT "FK_e6a111fe55827fb2238a55bbeb4" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "course_invoices" ADD CONSTRAINT "FK_2fda76c73d600ee3f3009334165" FOREIGN KEY ("userInvoicesId") REFERENCES "user_invoices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "question_lesson" ADD CONSTRAINT "FK_6322860eb4af9c497b223012be9" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "question_lesson" ADD CONSTRAINT "FK_1db61b5617418af9ed92c0a6543" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_lesson" ADD CONSTRAINT "FK_83cbd2ebf724e51afe91d8205b4" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_lesson" ADD CONSTRAINT "FK_bd8e76fd42a02ed386930662662" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson_course" ADD CONSTRAINT "FK_cdf7e7e1ea1698055dfa0cd0283" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson_course" ADD CONSTRAINT "FK_11915758c131d220e954d72e919" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_course" ADD CONSTRAINT "FK_63b2ec4f34c89d4b1219f85a806" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_course" ADD CONSTRAINT "FK_67a940b1d7b3cc2f0e99ab6d23b" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" ADD CONSTRAINT "FK_08e5a6e400775ffc0697e0f0577" FOREIGN KEY ("photoId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" ADD CONSTRAINT "FK_c6c48d73b3b32e47e9cc1cfc4c4" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "question" ADD CONSTRAINT "FK_b8dd754e373b56714ddfa8f545c" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_question" ADD CONSTRAINT "FK_64b66c10122a98bb8faaed64857" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_question" ADD CONSTRAINT "FK_a48daec7bfcec8d7edbfc867481" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_invoices" ADD CONSTRAINT "FK_9e864a667aefba34622469ab332" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_invoices" ADD CONSTRAINT "FK_20dcb56c2ce229bd5005e512973" FOREIGN KEY ("invoiceId") REFERENCES "invoice"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_invoices" DROP CONSTRAINT "FK_20dcb56c2ce229bd5005e512973"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_invoices" DROP CONSTRAINT "FK_9e864a667aefba34622469ab332"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_question" DROP CONSTRAINT "FK_a48daec7bfcec8d7edbfc867481"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_question" DROP CONSTRAINT "FK_64b66c10122a98bb8faaed64857"`,
    );
    await queryRunner.query(
      `ALTER TABLE "question" DROP CONSTRAINT "FK_b8dd754e373b56714ddfa8f545c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" DROP CONSTRAINT "FK_c6c48d73b3b32e47e9cc1cfc4c4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" DROP CONSTRAINT "FK_08e5a6e400775ffc0697e0f0577"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_course" DROP CONSTRAINT "FK_67a940b1d7b3cc2f0e99ab6d23b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_course" DROP CONSTRAINT "FK_63b2ec4f34c89d4b1219f85a806"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson_course" DROP CONSTRAINT "FK_11915758c131d220e954d72e919"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson_course" DROP CONSTRAINT "FK_cdf7e7e1ea1698055dfa0cd0283"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_lesson" DROP CONSTRAINT "FK_bd8e76fd42a02ed386930662662"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_lesson" DROP CONSTRAINT "FK_83cbd2ebf724e51afe91d8205b4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "question_lesson" DROP CONSTRAINT "FK_1db61b5617418af9ed92c0a6543"`,
    );
    await queryRunner.query(
      `ALTER TABLE "question_lesson" DROP CONSTRAINT "FK_6322860eb4af9c497b223012be9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "course_invoices" DROP CONSTRAINT "FK_2fda76c73d600ee3f3009334165"`,
    );
    await queryRunner.query(
      `ALTER TABLE "course_invoices" DROP CONSTRAINT "FK_e6a111fe55827fb2238a55bbeb4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "answer" DROP CONSTRAINT "FK_a4013f10cd6924793fbd5f0d637"`,
    );
    await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "deletedAt"`);
    await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "public"."invoice_status_enum"`);
    await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "money"`);
    await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "description"`);
    await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "name"`);
    await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "categoryId"`);
    await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "public"."question_status_enum"`);
    await queryRunner.query(
      `ALTER TABLE "question" DROP COLUMN "questionType"`,
    );
    await queryRunner.query(`DROP TYPE "public"."question_questiontype_enum"`);
    await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "audioUrl"`);
    await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "description"`);
    await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "title"`);
    await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "categoryId"`);
    await queryRunner.query(
      `ALTER TABLE "course" DROP CONSTRAINT "UQ_08e5a6e400775ffc0697e0f0577"`,
    );
    await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "photoId"`);
    await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "deletedAt"`);
    await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "public"."course_status_enum"`);
    await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "description"`);
    await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "price"`);
    await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "name"`);
    await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "deletedAt"`);
    await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "public"."lesson_status_enum"`);
    await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "lessonType"`);
    await queryRunner.query(`DROP TYPE "public"."lesson_lessontype_enum"`);
    await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "videoUrl"`);
    await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "content"`);
    await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "title"`);
    await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "questionId"`);
    await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "public"."answer_status_enum"`);
    await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "position"`);
    await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "isCorrect"`);
    await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "answerText"`);
    await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "answerAudio"`);
    await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "answerType"`);
    await queryRunner.query(`DROP TYPE "public"."answer_answertype_enum"`);
    await queryRunner.query(`DROP TABLE "user_invoices"`);
    await queryRunner.query(`DROP TABLE "user_question"`);
    await queryRunner.query(`DROP TYPE "public"."user_question_status_enum"`);
    await queryRunner.query(`DROP TABLE "category"`);
    await queryRunner.query(`DROP TABLE "user_course"`);
    await queryRunner.query(`DROP TYPE "public"."user_course_status_enum"`);
    await queryRunner.query(`DROP TABLE "lesson_course"`);
    await queryRunner.query(`DROP TYPE "public"."lesson_course_status_enum"`);
    await queryRunner.query(`DROP TABLE "user_lesson"`);
    await queryRunner.query(`DROP TYPE "public"."user_lesson_status_enum"`);
    await queryRunner.query(`DROP TABLE "question_lesson"`);
    await queryRunner.query(`DROP TYPE "public"."question_lesson_status_enum"`);
    await queryRunner.query(`DROP TABLE "course_invoices"`);
  }
}
