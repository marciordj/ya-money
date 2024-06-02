import { PurchaseRepository } from "../repositories/purchase-repository";

export class findExpenseByIdUseCase {
	constructor(private purchaseRepository: PurchaseRepository) { }

	public async execute(id: string) {
		return this.purchaseRepository.findById(id);
	}
}
