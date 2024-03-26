import { PurchaseRepository } from '../../repositories/purchase-repository';
import { Purchase } from '../../service/purchase';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function purchaseList(request: FastifyRequest, reply: FastifyReply) {
	try {
		const listPurchaseRepository = new PurchaseRepository();
		const listPurchase = new Purchase(listPurchaseRepository);

		return reply.status(200).send(await listPurchase.list());
	} catch(err) {
		return reply.status(400).send({ err });
	}
}