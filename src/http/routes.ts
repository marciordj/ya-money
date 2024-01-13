import { FastifyInstance } from 'fastify';
import { purchase } from './controller/purchaseRegister';
import { purchaseList } from './controller/purchaseList';

export async function appRoutes(app: FastifyInstance){
	app.get('/purchase', purchaseList);
	app.post('/purchase', purchase);
}