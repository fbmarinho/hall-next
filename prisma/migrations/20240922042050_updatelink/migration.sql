/*
  Warnings:

  - Added the required column `href` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `target` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "href" TEXT NOT NULL,
ADD COLUMN     "target" TEXT NOT NULL;
