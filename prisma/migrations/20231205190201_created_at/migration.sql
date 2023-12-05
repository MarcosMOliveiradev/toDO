/*
  Warnings:

  - Added the required column `createdAt` to the `toDo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_toDo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mes" TEXT NOT NULL,
    "dia" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL
);
INSERT INTO "new_toDo" ("descricao", "dia", "id", "mes", "titulo") SELECT "descricao", "dia", "id", "mes", "titulo" FROM "toDo";
DROP TABLE "toDo";
ALTER TABLE "new_toDo" RENAME TO "toDo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
