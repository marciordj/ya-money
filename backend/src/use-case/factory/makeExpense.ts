import { PrismaPurchaseRepository } from '../../repositories/prisma/prisma-purchase-repository';
import { CreateExpenseUseCase } from '../create-expense-use-case';

export function makeExpense() {
	const prismaPurchaseRepository = new PrismaPurchaseRepository();
	const expenseUseCase = new CreateExpenseUseCase(prismaPurchaseRepository);

	return expenseUseCase;
}
