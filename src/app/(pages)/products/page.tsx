import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "e-commerce about",
    description: "Quienes somos La casa de las semillas e-commerce",
    keywords: ["semillas", "e-commerce", "plantas", "jardineria"],
};

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center">
            <span>Products</span>
        </main>
    )
}
