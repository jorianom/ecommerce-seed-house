import { Products } from "@/src/components/products/Products";
import { products } from "../../interfaces";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* <CardCategorie item={categories} /> */}
      <Products label="Productos Populares" list={products} />
    </main>
  );
}
