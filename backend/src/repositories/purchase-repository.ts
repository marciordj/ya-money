import { Prisma, Purchases } from '@prisma/client';

export interface PurchaseRepository {
	create(data: Prisma.PurchasesCreateInput): Promise<Purchases>
	list(): Promise<Purchases[]>
	findById(id: string): Promise<Purchases | null>
}