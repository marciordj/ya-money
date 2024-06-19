import { Prisma, Purchases } from '@prisma/client';
import { PurchaseRepository } from '../purchase-repository';

export class InMemoryPurchaseRepository implements PurchaseRepository {
	public items: Purchases[] = [];

	public async create(data: Prisma.PurchasesCreateInput) {
		const purchase = {
			id: '1321312',
			location: data.location,
			created_at: new Date(),
			price: data.price,
			bank: 'Banco do Brasil',
		};

		this.items.push(purchase);

		return purchase;
	}

	public async list() {
		return this.items;
	}

	public async findById(id: string) {
		return this.items.find((item) => item.id === id);
	}
}