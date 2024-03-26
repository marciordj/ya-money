import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { PurchaseRepository } from '../../repositories/purchase-repository';
import { Purchase } from '../../service/purchase';

export async function purchase(request: FastifyRequest, reply: FastifyReply) {
	const registerBodySchema = z.object({
		location: z.string(),
		price: z.number(),
		bank: z.string()
	});

	const { location, price, bank } = registerBodySchema.parse(request.body);

	try {
		const prismaPurchaseRepository = new PurchaseRepository();
		const purchaseService = new Purchase(prismaPurchaseRepository);

		await purchaseService.execute({
			location,
			price,
			bank
		});

		return reply.status(201).send({message: 'Compra cadastrada'});
	} catch (err) {
		return reply.status(409).send(err);
	}
}