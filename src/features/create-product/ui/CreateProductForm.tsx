import { categoriesDB } from "@/app/page";
import { createProductServer } from "@/features/create-product/model/createProduct.server";
import { generateForm } from "./GenerateForm";

export default async function CreateProductsForm() {
  return (
    <>
      <h1>Добавить продукт</h1>

      <form action={createProductServer}>
        {generateForm("title", "text", "Имя продукта:")}
        {generateForm("price", "number", "Цена продукта:")}
        {generateForm("image", "text", "Ссылка на изображение:")}

        <label htmlFor="categoryId">Категория:</label>
        <select name="categoryId" id="categoryId">
          {categoriesDB.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>

        {generateForm("OS", "text", "Операционная система:")}
        {generateForm("model", "number", "Модель:")}
        {generateForm("screenSize", "number", "Размер экрана:")}
        {generateForm("numberOfcores", "number", "Количество ядер:")}
        {generateForm("powerSupplyPower", "number", "Мощность блока питания:")}
        {generateForm("processor", "text", "Процессор:")}
        {generateForm("RAM", "number", "Оперативная память (RAM):")}
        {generateForm("ROM", "number", "Встроенная память (ROM):")}
        {generateForm("weight", "number", "Вес:")}

        <button type="submit">Добавить продукт</button>
      </form>
    </>
  );
}
