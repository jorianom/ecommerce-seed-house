import { Products } from "@/src/components/ads/Products";
import { AdsCarousel } from "../components/ads/AdsCarousel";



const categories = [
  {
    id: 1,
    alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
    name: "Frutas",
    image: "/resources/images/semilla.jpg",
    titleProduct: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
    price: 100000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium."
  },

  {
    id: 2,
    alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
    name: "Árboles",
    image: "/resources/images/flor.jpg",
    titleProduct: "Unas matas ahí",
    price: 100000,
    discount: "-20%"
  },
  {
    id: 3,
    alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
    name: "Árboles",
    image: "/resources/images/flor.jpg",
    titleProduct: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium.",
    price: 100000,
    discount: "-20%"
  },
  {
    id: 4,
    alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
    name: "Frutas",
    image: "/resources/images/semilla.jpg",
    titleProduct: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
    price: 100000,
    discount: "-60%"
  },

  {
    id: 5,
    alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
    name: "Árboles",
    image: "/resources/images/flor.jpg",
    titleProduct: "Unas matas ahí",
    price: 100000,
    discount: "-10%"
  },
  {
    id: 6,
    alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
    name: "Árboles",
    image: "/resources/images/flor.jpg",
    titleProduct: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium.",
    price: 100000,
    discount: "-30%"
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
