-- AlterTable
ALTER TABLE "Rig" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "createdAt" TIMESTAMP(3),
ADD COLUMN     "modifiedAt" TIMESTAMP(3);
