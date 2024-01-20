import { FastifyReply, FastifyRequest } from 'fastify';
import { PurchaseRepository } from '../../repositories/purchase-repository';
import { Purchase } from '../../service/purchase';

export async function findPurchaseById(request: FastifyRequest, reply: FastifyReply) {
	try {
		const purchaseRepository = new PurchaseRepository();
		const purchaseService = new Purchase(purchaseRepository);

		const { id } = request.params;

		return reply.status(200).send(await purchaseService.findById(id));
	}catch(err) {
		return reply.status(400).send({err});
	}
}