import fastifyCors from '@fastify/cors';
import fastify from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from './env.ts';
import { getRoomsRoute } from './http/routes/get-rooms.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
});

app.get('/health', () => {
  return 'teste bem feito';
});

app.register(getRoomsRoute)

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.listen({ port: env.PORT }).then();
console.log('http://localhost:' + process.env.PORT)
