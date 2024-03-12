import { app } from './app.ts';

app.listen({
	host: '0.0.0.0',
	port: 3000
}).then(() => {
	console.log('Server running');
});