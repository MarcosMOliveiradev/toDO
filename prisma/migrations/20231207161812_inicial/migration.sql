-- CreateTable
CREATE TABLE "toDo" (
    "id" TEXT NOT NULL,
    "mes" TEXT NOT NULL,
    "dia" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "toDo_pkey" PRIMARY KEY ("id")
);
