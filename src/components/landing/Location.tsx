import Image from "next/image"
import { FaSeedling } from "react-icons/fa6"

export const Location = () => {
    return (
        <section className="flex flex-col md:flex-row w-full bg-softprimary p-4 md:h-[500px]">
            <div className="relative w-full md:w-1/2 min-h-[300px] md:h-full">
                <FaSeedling className="absolute inset-0 w-full h-full text-white opacity-90  py-2" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary">
                    <h2 className="text-3xl font-semibold mb-2">Nuestra Tienda Fisica</h2>
                    <p className="mb-4 px-4 text-2xl">Visítanos en nuestra sede principal en Yopal, ubicada en la siguiente dirección:</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4638914132474!2d-72.40121959999999!3d5.345936299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6b0c4a64f5797f%3A0x32fd716e786aa215!2sCl.%2010%20%2318-38%2C%20Yopal%2C%20Casanare!5e0!3m2!1ses-419!2sco!4v1729302609000!5m2!1ses-419!2sco"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Nuestra ubicación: La Casa de la Semilla"
                    className="w-full"
                />

            </div>
        </section>
    )
}