"use server";
import { prisma } from "@/app/prisma/prismaClient";
import { Prisma } from "@prisma/client";

export async function createProductServer(formData: FormData) {
  const data: Prisma.ProductItemCreateInput = {
    title: formData.get("title") as string,
    image: formData.get("image") as string,
    price: Number(formData.get("price")),
    category: {
      connect: { id: Number(formData.get("categoryId")) },
    },
    smartphoneSpecification: {
      create: {
        OS: formData.get("OS") as string,
        model: Number(formData.get("model")),
        screenSize: formData.get("screenSize") as string,
        numberOfcores: Number(formData.get("numberOfcores")),
        powerSupplyPower: Number(formData.get("powerSupplyPower")),
        processor: formData.get("processor") as string,
        RAM: Number(formData.get("RAM")),
        ROM: Number(formData.get("ROM")),
        weight: Number(formData.get("weight")),
      },
    },
  };

  await prisma.productItem.create({
    data: data,
  });
}
