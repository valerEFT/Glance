import { prisma } from "@/app/prisma/prismaClient";

export const categoriesDB = await prisma.category.findMany();
