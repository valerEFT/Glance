import { prisma } from "@/app/prisma/prismaClient";
import { CategoryParamsProps } from "@/features/create-product/model/types";
import Link from "next/link";

export default async function CategoryPage({ params }: CategoryParamsProps) {
  const { category } = await params;
  const currentCategory = await prisma.category.findUnique({
    where: { slug: category },
  });

  if (!currentCategory) {
    return <div>Категория не найдена</div>;
  }

  const products = await prisma.productItem.findMany({
    where: { categoryId: currentCategory.id },
  });

  if (!products) {
    return <div>В категории "{currentCategory.title}" пока нету товаров</div>;
  }

  return (
    <>
      <h1>{currentCategory.title}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`${currentCategory.slug}/${product.title}`}>
              <img src={product.image} alt={product.title} />
              {product.title} — {product.price}₽
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
