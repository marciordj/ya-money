import { Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { PurchaseRepository } from '../purchase-repository';

export class PrismaPurchaseRepository implements PurchaseRepository {
	async create(data: Prisma.PurchasesCreateInput) {
		const purchase = await prisma.purchases.create({
			data
		});
		return purchase;
	}

	async list() {
		const purchase = await prisma.purchases.findMany();

		return purchase;
	}

	async findById(id: string) {
		const purchaseFinded = await prisma.purchases.findFirst({
			where: {
				id: id
			}
		});

		return purchaseFinded;
	}
}
