import { Products } from "@/src/components/ads/Products";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "e-commerce about",
    description: "Quienes somos La casa de las semillas e-commerce",
    keywords: ["semillas", "e-commerce", "plantas", "jardineria"],
};

export const products = [
    {
        id: 1,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Frutas",
        image: "/resources/images/semilla.jpg",
        titleProduct: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        price: 100000,
        slug: "semillas",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium."
    },

    {
        id: 2,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Árboles",
        image: "/resources/images/flor.jpg",
        titleProduct: "Unas matas ahí",
        price: 1000000,
        slug: "importado",
        discount: "-20%"
    },
    {
        id: 3,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Árboles",
        image: "/resources/images/flor.jpg",
        titleProduct: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium.",
        price: 100000,
        slug: "macetas",
        discount: "-20%"
    },
    {
        id: 4,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Frutas",
        image: "/resources/images/semilla.jpg",
        titleProduct: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        price: 100000,
        slug: "jardineria",
        discount: "-60%"
    },

    {
        id: 5,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Árboles",
        image: "/resources/images/flor.jpg",
        titleProduct: "Unas matas ahí",
        price: 100000,
        slug: "fertilizantes",
        discount: "-10%"
    },
    {
        id: 6,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Árboles",
        image: "/resources/images/flor.jpg",
        titleProduct: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium.",
        price: 100000,
        slug: "semillas",
        discount: "-30%"
    },
    {
        id: 6,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Árboles",
        image: "/resources/images/flor.jpg",
        titleProduct: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium.",
        price: 100000,
        slug: "semillas",
        discount: "-30%"
    }
]
export default function ProductPage() {
    return (
        <Products label="" list={products} />
    )
}
