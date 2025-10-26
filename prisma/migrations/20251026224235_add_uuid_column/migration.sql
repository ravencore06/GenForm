-- AlterTable: Add uuid column to Form table
ALTER TABLE "Form" ADD COLUMN "uuid" TEXT;

-- Generate UUIDs for existing rows
UPDATE "Form" SET "uuid" = gen_random_uuid()::text WHERE "uuid" IS NULL;

-- Make uuid column required and unique
ALTER TABLE "Form" ALTER COLUMN "uuid" SET NOT NULL;
ALTER TABLE "Form" ADD CONSTRAINT "Form_uuid_key" UNIQUE ("uuid");
