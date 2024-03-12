import { fastify } from "./libs/index.ts";

export const app = fastify.fastify();

app.get('/', () => 'Hello worldsadasd');