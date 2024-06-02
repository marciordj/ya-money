import { PurchaseRepository } from "../repositories/purchase-repository";

export class ListExpenseUseCase {
	constructor(private purchaseRepository: PurchaseRepository) { }

	public async execute() {
		return await this.purchaseRepository.list();
	}
}
