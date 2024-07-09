import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeExpense } from '../../use-case/factory/makeExpense';

export async function purchase(request: FastifyRequest, reply: FastifyReply) {
	const registerBodySchema = z.object({
		location: z.string(),
		price: z.number(),
		bank: z.string()
	});

	const { location, price, bank } = registerBodySchema.parse(request.body);

	try {
		const createExpenseUseCase = makeExpense();

		await createExpenseUseCase.execute({
			location,
			price,
			bank
		});

		return reply.status(201).send({message: 'Compra cadastrada'});
	} catch (err) {
		return reply.status(409).send(err);
	}
}