// apps/api/prisma/seed.ts
import 'dotenv/config'; // Importante para ler a sua variável DATABASE_URL
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import standsData from './stands.json' with { type: 'json' };

// Criando a conexão com o banco e passando para o Prisma
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function main() {
  console.log('Iniciando Database Seed...');

  for (const stand of standsData) {
    const createdStand = await prisma.stand.upsert({
      where: { name: stand.name },
      update: {}, // Se já existir com esse nome, não faz nada
      create: stand,
    });
    console.log(`✨ Injetado: ${createdStand.name} (${createdStand.user})`);
  }

  console.log('✅Stands catalogados com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no Stand Attack:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });