import app from "./app";

app.get('/', (request, reply) => {
	return reply.send({foi: 'ae'})
});

app.listen({
	host: '0.0.0.0',
	port: 8000
}).then(() => {
	console.log('run on port 8000')
})