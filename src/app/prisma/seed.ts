import { prisma } from "./prisma-client";

async function up() {}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "user" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error("Error seeding the database", e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
