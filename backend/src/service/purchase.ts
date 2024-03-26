import { PurchaseRepository } from '../repositories/purchase-repository';

type IPurchaseService = {
	location: string;
	price: number;
	bank: string
}

export class Purchase {
	constructor(private purchaseRepository: PurchaseRepository){}

	async execute({ location, price, bank }: IPurchaseService) {
		await this.purchaseRepository.create({
			location,
			price,
			bank
		});
	}

	async list() {
		return await this.purchaseRepository.list();
	}

	async findById(id: string) {
		return await this.purchaseRepository.findById(id);
	}
}