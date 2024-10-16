import { Products } from "@/src/components/ads/Products";

const categories = [
  {
    name: "Frutas",
    image: "/resources/images/semilla.jpg",
    titleProduct: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras"
  },

  {
    name: "Árboles",
    image: "/resources/images/flor.jpg",
    titleProduct: "Unas matas ahí"
  },
  {
    name: "Árboles",
    image: "/resources/images/flor.jpg",
    titleProduct: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium."
  },
  {
    name: "Frutas",
    image: "/resources/images/semilla.jpg",
    titleProduct: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras"
  },

  {
    name: "Árboles",
    image: "/resources/images/flor.jpg",
    titleProduct: "Unas matas ahí"
  },
  {
    name: "Árboles",
    image: "/resources/images/flor.jpg",
    titleProduct: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium."
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
