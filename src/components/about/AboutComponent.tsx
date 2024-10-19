import Image from "next/image"

export const AboutComponent = () => {
    return (
        <>
            <section className="bg-softprimary md:mx-4 border border-green-300 py-16 shadow-md  px-3 sm:px-0 rounded-t-lg">
                <div className="mx-auto max-w-2xl ">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Sobre Nosotros</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        En La Casa de las Semilla, nos apasiona llevar a cada hogar los mejores productos agrícolas para sembrar un futuro más saludable y sostenible.
                    </p>
                    <Image src="/resources/images/fondo.jpg" alt="Sobre Nosotros" width={800} height={500} className="rounded-lg mt-6" />
                </div>
            </section>
            <section className="bg-softprimary md:mx-4 border border-green-300 py-16 shadow-md">
                <div className="flex flex-col lg:flex-row mx-auto max-w-2xl px-3 sm:px-0">
                    <div className="p-3">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Misión</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Nuestra misión es empoderar a las personas a cultivar un futuro más verde y sostenible, proporcionando productos agrícolas de alta calidad.
                        </p>
                    </div>
                    <div className="p-3">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Visión</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Convertirnos en un referente global en el suministro de productos agrícolas de calidad que promuevan la sostenibilidad y la innovación, apoyando a agricultores y consumidores en el cultivo de un futuro más verde, próspero y ecológicamente responsable.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-softprimary md:mx-4 border border-green-300 py-16 shadow-md  px-3 sm:px-0">
                <div className="container mx-auto max-w-2xl">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nuestra Equipo y Valores</h2>
                    <p className="text-gray-600 mb-6">
                        Somos un equipo apasionado de agricultores, expertos en plantas y entusiastas del medio ambiente, dedicados a ayudarte a obtener el máximo de tus proyectos agrícolas.
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
            <section className="bg-softprimary md:mx-4 border border-green-300 py-16 shadow-md rounded-b-lg  px-3 sm:px-0">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nuestra Equipo y Valores</h2>
                    <p className="mb-4">Visítanos en nuestra sede principal en Yopal, ubicada en la siguiente dirección:</p>
                </div>
                <div className="mx-auto max-w-2xl border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white">
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
        </>
    )
}
