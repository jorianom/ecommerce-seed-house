
const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
]
const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
]

export const AboutComponent = () => {
    return (
        <div className="min-h-screen bg-white m-5">
            {/* Encabezado */}
            <section className="bg-softprimary border py-16 shadow-md">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Sobre Nosotros</h1>
                    <p className="text-lg text-gray-600 text-center">
                        En La Casa de las Semillas, nos apasiona llevar a cada hogar los mejores productos agrícolas para sembrar un futuro más saludable y sostenible.
                    </p>
                </div>
            </section>

            {/* Nuestra Historia */}
            <section className="bg-softprimary container mx-auto px-4 py-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nuestra Historia</h2>
                <p className="text-gray-600 mb-6">
                    Todo comenzó con un pequeño sueño en el corazón de una granja familiar. Inspirados por la necesidad de productos orgánicos de calidad, creamos La Casa de las Semillas en el año XXXX. Desde entonces, hemos crecido para ofrecer una amplia variedad de semillas y productos agrícolas.
                </p>
            </section>

            {/* Misión y Valores */}
            <section className="bg-softprimary py-12">
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

            {/* Nuestro Equipo */}
            <section className="bg-softprimary container mx-auto px-4 py-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Conoce a nuestro Equipo</h2>
                <p className="text-gray-600 mb-6">
                    Somos un equipo apasionado de agricultores, expertos en plantas y entusiastas del medio ambiente, dedicados a ayudarte a obtener el máximo de tus proyectos agrícolas.
                </p>
            </section>

            {/* Sostenibilidad */}
            <section className="bg-softprimary py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nuestro Compromiso con la Sostenibilidad</h2>
                    <p className="text-gray-600 mb-6">
                        Creemos en la protección de nuestro planeta. Nos comprometemos a reducir el uso de plásticos y apoyar prácticas agrícolas responsables.
                    </p>
                </div>
            </section>

            {/* Testimonios */}
            <section className="bg-softprimary container mx-auto px-4 py-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Lo que dicen nuestros clientes</h2>
                <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <p className="text-gray-600">
                        "Estoy muy contento con la calidad de las semillas y el servicio que recibí. ¡Definitivamente volveré a comprar aquí!" — [Nombre del Cliente]
                    </p>
                </blockquote>
            </section>
        </div>

    )
}
