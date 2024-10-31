import { Products } from "@/src/components/products/Products";
import { CardCategorie } from "../components/products/CardCategorie";
import { categories, products } from "../interfaces";

export default function Home() {
  return (
    <main className="">
      <CardCategorie item={categories} />
      <Products label="Productos Populares" list={products} />
    </main>
  );
}
