import { categoriesDB } from "@/entities/category/model/categoriesDB";
import Link from "next/link";

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
