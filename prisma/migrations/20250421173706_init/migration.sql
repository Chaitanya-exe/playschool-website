-- CreateEnum
CREATE TYPE "Type" AS ENUM ('ADMISSION', 'FEES', 'FACILITIES', 'PROGRAMS');

-- CreateTable
CREATE TABLE "Query" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "queries" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "type" "Type"[] DEFAULT ARRAY[]::"Type"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Query_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Query_email_key" ON "Query"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Query_number_key" ON "Query"("number");
