import { Prisma } from '@prisma/client';
import { PurchaseRepository } from '../purchase-repository';
import { prisma } from '../../lib/prisma';

export class PrismaPurchaseRepository implements PurchaseRepository {
	async create(data: Prisma.PurchasesCreateInput) {
		const purchase = await prisma.purchases.create({
			data
		});
		return purchase;
	}
}