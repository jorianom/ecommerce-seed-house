import type { Metadata } from "next";
import { AboutComponent } from "@/src/components/about/AboutPage";


export const metadata: Metadata = {
    title: "e-commerce about",
    description: "Quienes somos La casa de las semillas e-commerce",
    keywords: ["semillas", "e-commerce", "plantas", "jardineria"],
};

export default function AboutPage() {
    return (
        <main className="min-h-screen my-2">
            {/* <span>About Page</span> */}
            <section className="bg-softprimary md:mx-4 border border-green-300 py-16 shadow-md rounded-t-lg">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Work with us</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
            </section>
            <section className="bg-softprimary md:mx-4 border border-green-300 py-16 shadow-md">
                <div className="flex mx-auto max-w-3xl lg:mx-0">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Misión</h2>
                        <p className="p-6 text-lg leading-8 text-gray-600">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Visión</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-softprimary md:mx-4 border border-green-300 py-16 shadow-md rounded-b-lg">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nuestra Misión y Valores</h2>
                    <p className="text-gray-600 mb-6">
                        Nuestra misión es empoderar a las personas a cultivar un futuro más verde y sostenible, proporcionando productos agrícolas de alta calidad.
                    </p>
                    <ul className="space-y-4">
                        <li className="text-gray-600">
                            <strong className="font-semibold text-gray-800">Calidad:</strong> Solo ofrecemos productos que confiamos que harán la diferencia.
                        </li>
                        <li className="text-gray-600">
                            <strong className="font-semibold text-gray-800">Sostenibilidad:</strong> Creemos en prácticas agrícolas que respetan la naturaleza.
                        </li>
                        <li className="text-gray-600">
                            <strong className="font-semibold text-gray-800">Innovación:</strong> Buscamos constantemente formas de mejorar y brindar productos de impacto.
                        </li>
                    </ul>
                </div>
            </section>

        </main>
    )
}
