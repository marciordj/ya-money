import { FastifyInstance } from 'fastify';

export async function appRoutes(app: FastifyInstance){
	app.get('/register', (request, reply) => {
		reply.status(200).send({message: 'deu'});
	});
}