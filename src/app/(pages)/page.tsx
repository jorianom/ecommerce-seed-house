import { Products } from "@/src/components/ads/Products";
import { CardProduct } from '@/src/components/products/CardProduct';


const categories = [
  {
    name: "Flores",
    image: "/resources/images/semilla.jpg"
  },
  {
    name: "Frutas",
    image: "/resources/images/semilla.jpg"
  },
  {
    name: "Hortalizas",
    image: "/resources/images/semilla.jpg"
  },
  {
    name: "Plantas",
    image: "/resources/images/flor.jpg"
  },
  {
    name: "Semillas",
    image: "/resources/images/flor.jpg"
  },
  {
    name: "Árboles",
    image: "/resources/images/flor.jpg"
  }
]

export default function Home() {
  return (
    <main className="">
      <Products label="Categorias Populares" list={categories} />
      {/* <Products label="Productos Populares" list={categories} /> */}
    </main>
  );
}
