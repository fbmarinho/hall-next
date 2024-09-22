-- CreateTable
CREATE TABLE "Rig" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "Rig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Well" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rigId" TEXT NOT NULL,

    CONSTRAINT "Well_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rig_name_key" ON "Rig"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Well_name_key" ON "Well"("name");
