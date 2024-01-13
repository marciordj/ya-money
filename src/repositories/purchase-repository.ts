import { Prisma, Purchases } from '@prisma/client';

export interface PurchaseRepository {
	create(data: Prisma.PurchasesCreateInput): Promise<Purchases>
}