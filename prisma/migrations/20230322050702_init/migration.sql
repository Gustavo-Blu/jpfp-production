-- CreateTable
CREATE TABLE "Campuses" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL DEFAULT 'https://www.gothamgazette.com/images/vacant-lot.jpg',
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Campuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL DEFAULT 'https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg',
    "gpa" DOUBLE PRECISION NOT NULL,
    "campusId" INTEGER NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Campuses_name_key" ON "Campuses"("name");

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_campusId_fkey" FOREIGN KEY ("campusId") REFERENCES "Campuses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
