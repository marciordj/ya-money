import { Prisma } from '@prisma/client';

export interface PurchaseRepository {
	create(data: Prisma.PurchasesCreateInput): Promise<any>
	list(): Promise<any>
	findById(id: string): Promise<any>
}