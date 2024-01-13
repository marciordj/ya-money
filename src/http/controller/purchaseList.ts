import { PrismaPurchaseRepository } from '../../repositories/prisma/prisma-repository';
import { Purchase } from '../../service/purchase';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function purchaseList(request: FastifyRequest, reply: FastifyReply) {
	try {
		const listPurchaseRepository = new PrismaPurchaseRepository();
		const listPurchase = new Purchase(listPurchaseRepository);

		return reply.status(200).send({
			listPurchase
		});
	} catch(err) {
		return reply.status(400).send({ err });
	}
}