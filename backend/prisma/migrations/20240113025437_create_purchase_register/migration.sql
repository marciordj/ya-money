-- CreateTable
CREATE TABLE "purchases" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" DOUBLE PRECISION NOT NULL,
    "bank" TEXT,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("id")
);
