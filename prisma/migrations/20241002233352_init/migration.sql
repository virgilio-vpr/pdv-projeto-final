/*
  Warnings:

  - You are about to drop the column `date` on the `Sale` table. All the data in the column will be lost.
  - Added the required column `updatedUp` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedUp" DATETIME NOT NULL
);
INSERT INTO "new_Sale" ("id", "price", "product") SELECT "id", "price", "product" FROM "Sale";
DROP TABLE "Sale";
ALTER TABLE "new_Sale" RENAME TO "Sale";
CREATE UNIQUE INDEX "Sale_product_key" ON "Sale"("product");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
