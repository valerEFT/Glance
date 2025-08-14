import { prisma } from "@/app/prisma/prismaClient";
import Link from "next/link";

export const categoriesDB = await prisma.category.findMany();

export default async function Home() {
  return (
    <>
      <h1>Каталог</h1>
      <ul>
        {categoriesDB.map((item) => (
          <li key={item.title}>
            <Link href={item.slug}>
              <img src={item.image} />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
