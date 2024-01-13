import { PurchaseRepository } from '../repositories/purchase-repository';

interface PurchaseService {
	location: string;
	price: number;
	bank: string
}

export class Purchase {
	constructor(private purchaseRepository: PurchaseRepository){}

	async execute({ location, price, bank }: PurchaseService) {
		await this.purchaseRepository.create({
			location,
			price,
			bank
		});
	}
}