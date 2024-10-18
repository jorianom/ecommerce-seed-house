import { Products } from "@/src/components/ads/Products";
import { NavbarCategories } from "@/src/components/products/NavbarCategories";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "e-commerce about",
    description: "Quienes somos La casa de las semillas e-commerce",
    keywords: ["semillas", "e-commerce", "plantas", "jardineria"],
};

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
export default function ProductPage() {
    return (
        <main className="">
            <p className="flex h-10 items-center justify-center bg-softprimary px-4 text-sm font-bold sm:px-6 lg:px-8">Obten envio gratis por compras superiores a $100</p>
            <NavbarCategories />
            <Products label="Categorias Populares" list={categories} />
        </main>
    )
}
