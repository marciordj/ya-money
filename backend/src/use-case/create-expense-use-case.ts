import { PurchaseRepository } from "../repositories/purchase-repository";

type PurchaseUseCaseTypes = {
	location: string;
	price: number;
	bank: string
}

export class CreateExpenseUseCase {
	constructor(private purchaseRepository: PurchaseRepository) { }
	public async execute({ location, price, bank }: PurchaseUseCaseTypes) {
		await this.purchaseRepository.create({
			location,
			price,
			bank
		});
	}
}
