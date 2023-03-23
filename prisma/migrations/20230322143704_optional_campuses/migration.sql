-- DropForeignKey
ALTER TABLE "Students" DROP CONSTRAINT "Students_campusId_fkey";

-- AlterTable
ALTER TABLE "Students" ALTER COLUMN "campusId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_campusId_fkey" FOREIGN KEY ("campusId") REFERENCES "Campuses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
