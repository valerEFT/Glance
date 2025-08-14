import { categories } from "./constants";
import { prisma } from "./prismaClient";

async function up() {
  for (let category of categories) {
    await prisma.category.create({
      data: {
        title: category.title,
        image: category.image,
        slug: category.slug,
      },
    });
  }
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "user" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "product_item" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "smartphone_specification" RESTART IDENTITY CASCADE`;
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
