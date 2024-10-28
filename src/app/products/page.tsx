import { Products } from "@/src/components/ads/Products";
import { products } from "@/src/interfaces";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "e-commerce about",
    description: "Quienes somos La casa de las semillas e-commerce",
    keywords: ["semillas", "e-commerce", "plantas", "jardineria"],
};

export default function ProductPage() {
    return (
        <Products label="" list={products} />
    )
}
