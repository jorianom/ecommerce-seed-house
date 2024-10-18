import { Products } from "@/src/components/ads/Products";
import { AdsCarousel } from "../components/ads/AdsCarousel";


const categories = [
  {
    id: 1,
    name: "Frutas",
    image: "/resources/images/semilla.jpg",
    titleProduct: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras"
  },

  {
    id: 2,
    name: "Árboles",
    image: "/resources/images/flor.jpg",
    titleProduct: "Unas matas ahí"
  },
  {
    id: 3,
    name: "Árboles",
    image: "/resources/images/flor.jpg",
    titleProduct: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium."
  },
  {
    id: 4,
    name: "Frutas",
    image: "/resources/images/semilla.jpg",
    titleProduct: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras"
  },

  {
    id: 5,
    name: "Árboles",
    image: "/resources/images/flor.jpg",
    titleProduct: "Unas matas ahí"
  },
  {
    id: 6,
    name: "Árboles",
    image: "/resources/images/flor.jpg",
    titleProduct: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium."
  }
]

export default function Home() {
  return (
    <main className="">
      <AdsCarousel />
      <Products label="Categorias Populares" list={categories} />
      {/* <Products label="Productos Populares" list={categories} /> */}
    </main>
  );
}
