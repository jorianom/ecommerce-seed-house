import type { Metadata } from "next";
import { AboutComponent } from "@/src/components/about/AboutComponent";


export const metadata: Metadata = {
    title: "e-commerce about",
    description: "Quienes somos La casa de las semillas e-commerce",
    keywords: ["semillas", "e-commerce", "plantas", "jardineria"],
};

interface SectionProps {
    description: string;
    title: string;
}

const Section = ({ description, title }: SectionProps) => {
    return (
        <section className="bg-softprimary md:mx-4 border border-green-300 py-16 shadow-md  px-3 sm:px-0 rounded-t-lg">
            <div className="mx-auto max-w-2xl ">
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">{title}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    {description}
                </p>
            </div>
        </section>
    )
}

export default function AboutPage() {
    return (
        <main className="min-h-screen my-2 max-w-md sm:max-w-5xl mx-auto px-5 md:px-0 text-center md:text-left">
            <AboutComponent />
        </main>
    )
}
