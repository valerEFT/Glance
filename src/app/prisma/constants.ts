import { Prisma } from "@prisma/client";

export const categories: Prisma.CategoryCreateInput[] = [
  { title: "Смартфоны", image: "smartphone.svg", slug: "smartphones" },
  { title: "Ноутбуки", image: "notebook.svg", slug: "notebooks" },
  { title: "Компьютеры", image: "computer.svg", slug: "computers" },
  { title: "Телевизоры", image: "television.svg", slug: "televisions" },
  { title: "Планшеты", image: "planshet.svg", slug: "planshets" },
  { title: "Колонки", image: "speakers.svg", slug: "speakers" },
];
