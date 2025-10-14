import Image from "next/image"

export const Hero = () => {
    return (
        <div className="relative w-full">
            <Image src="/resources/images/hero.jpg" alt="Imagen Decorativa Campo de Semillas" width={800} height={500} className="object-cover h-screen w-full" />
            <div className="absolute inset-0 w-full flex flex-col items-center justify-center text-white text-center px-5">
                <h1 className="text-4xl font-bold my-1 pt-16">Bienvenido a La Casa de la Semilla</h1>
                <div className="flex flex-col w-full space-y-4">
                    <p className="text-lg">Tu punto de referencia para semillas certificadas, fertilizantes, sustratos y todo lo esencial del cultivo. Calidad garantizada, precios competitivos y asesoría experta te esperan en nuestro local. <br /> <b>¡Visítanos y lleva tu producción al siguiente nivel!</b></p>
                    <div className="flex justify-center items-center ">
                        <button className="bg-green-600 hover:bg-green-700 text-white border-2 px-6 py-2 rounded-xl shadow-lg transition">
                            Tienda online (Próximamente)
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}