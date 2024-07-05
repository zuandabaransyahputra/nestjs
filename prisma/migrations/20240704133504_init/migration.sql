-- CreateTable
CREATE TABLE "English" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "English_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Espanyol" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Espanyol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Italy" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Italy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "France" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "France_pkey" PRIMARY KEY ("id")
);
