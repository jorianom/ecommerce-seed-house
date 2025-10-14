import type { Metadata } from "next";
import { AboutComponent } from "@/src/components/about/AboutComponent";


export const metadata: Metadata = {
    title: "La casa de la semilla about",
    description: "Quienes somos La casa de las semillas La casa de la semilla",
    keywords: ["semillas", "La casa de la semilla", "plantas", "jardineria"],
};

export default function AboutPage() {
    return (
        <main className="min-h-screen my-2 max-w-md md:max-w-5xl  mx-auto px-5 md:px-0 text-center md:text-left dark:text-black">
            <AboutComponent />
        </main>
    )
}
