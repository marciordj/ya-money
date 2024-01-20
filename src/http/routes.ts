import { FastifyInstance } from 'fastify';
import { purchase } from './controller/purchaseRegister';
import { purchaseList } from './controller/purchaseList';
import { findPurchaseById } from './controller/findById';

export async function appRoutes(app: FastifyInstance){
	app.get('/purchase', purchaseList);
	app.get('/purchase/:id', findPurchaseById);
	app.post('/purchase', purchase);
}