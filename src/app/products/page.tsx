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
export default function ProductPage() {
    return (
        <main className="">
            <p className="flex h-10 items-center justify-center text-center bg-softprimary px-4 text-sm font-bold sm:px-6 lg:px-8">Obten envio gratis por compras superiores a $100</p>
            <NavbarCategories />
            <Products label="" list={categories} />
        </main>
    )
}
