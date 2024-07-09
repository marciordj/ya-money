import { PrismaPurchaseRepository } from '../../repositories/prisma/prisma-purchase-repository';
import { FastifyReply, FastifyRequest } from 'fastify';
import { ListExpenseUseCase } from '../../use-case/list-expense-use-case';

export async function purchaseList(request: FastifyRequest, reply: FastifyReply) {
	try {
		const listPurchaseRepository = new PrismaPurchaseRepository();
		const listExpenseUseCase = new ListExpenseUseCase(listPurchaseRepository);

		return reply.status(200).send(await listExpenseUseCase.execute());
	} catch(err) {
		return reply.status(400).send({ err });
	}
}