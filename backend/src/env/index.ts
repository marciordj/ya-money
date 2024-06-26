import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
	NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
	PORT: z.coerce.number().default(8000)
});

const _env = envSchema.safeParse(envSchema);

if (_env.success === false) {
	console.error('Invalid env', _env.error.format());

	throw new Error('Invalid enviroment');
}

export const env = _env.data;