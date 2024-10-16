
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6"

export const Footer = () => {
    return (
        <footer className="bg-primary text-white py-4">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="text-sm text-center sm:text-left">
                    <p className="mb-2">© 2024 LA CASA DE LAS SEMILLAS. <br />
                        Todos los derechos reservados.</p>
                    <p>
                        Creado por <a href="https://github.com/jorianom" className="text-white hover:underline">Jorianom</a>
                    </p>
                </div>

                <div className="hidden md:flex flex-col items-center mb-4 sm:mb-0">
                    <ul className="space-y-2">
                        <li>
                            <a href="/about" className="hover:underline">
                                Sobre Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="/faq" className="hover:underline">
                                Preguntas Frecuentes (FAQ):
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="hover:underline">
                                Términos y Condiciones
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex space-x-6 mb-4 pt-4 sm:mb-0 sm:pt-0">
                    <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                        <FaFacebook className="h-6 w-6" fill="white" />
                    </a>
                    <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                        <FaInstagram className="h-6 w-6" fill="white" />
                    </a>
                    <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                        <FaWhatsapp className="h-6 w-6" fill="white" />
                    </a>
                </div>

            </div>
        </footer>

    )
}
