import { Products } from "@/src/components/products/Products";
import { products } from "@/src/interfaces";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "La casa de la semilla about",
    description: "Quienes somos La casa de las semillas La casa de la semilla",
    keywords: ["semillas", "La casa de la semilla", "plantas", "jardineria"],
};

export default function ProductPage() {
    return (
        <Products label="" list={products} />
    )
}
