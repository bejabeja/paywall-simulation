-- CreateTable
CREATE TABLE "Plan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "priceTextAnually" TEXT NOT NULL,
    "priceTextMonthly" TEXT NOT NULL,
    "buttonText" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PlanFeature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "planId" INTEGER NOT NULL,
    CONSTRAINT "PlanFeature_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
