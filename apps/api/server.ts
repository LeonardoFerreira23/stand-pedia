// apps/api/server.ts
import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';


const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });


const app = Fastify({ logger: true });


app.register(cors, { origin: true });


app.get('/stands', async (request, reply) => {
  const stands = await prisma.stand.findMany();
  return stands;
});


const start = async () => {
  try {
    await app.listen({ port: 3333 });
    console.log('API rodando na porta 3333');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();