import { FastifyInstance } from 'fastify';
import { purchase } from './controller/purchase';

export async function appRoutes(app: FastifyInstance){
	app.get('/purchase', (request, reply) => {
		reply.status(200).send({message: 'deu'});
	});
	app.post('/purchase', purchase);
}