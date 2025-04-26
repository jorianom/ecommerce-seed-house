import { FaShippingFast } from "react-icons/fa"
import { FaRankingStar } from "react-icons/fa6"
import { RiHandHeartFill } from "react-icons/ri"

export const Info = () => {
    return (
        <section className="h-auto bg-green-600 py-6">
            <ul className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-5xl mx-auto gap-4 text-white text-left">
                <li className="flex sm:flex-col justify-center items-center gap-4 sm:gap-0">
                    <RiHandHeartFill className="text-4xl mb-2" />
                    <p>Atención personalizada</p>
                </li>
                <li className="flex sm:flex-col justify-center items-center gap-4 sm:gap-0">
                    <FaShippingFast className="text-4xl mb-2" />
                    <p>Envíos rápidos</p>
                </li>
                <li className="flex sm:flex-col justify-center items-center gap-4 sm:gap-0">
                    <FaRankingStar className="text-4xl mb-2" />
                    <p>Calidad garantizada</p>
                </li>
            </ul>
        </section>
    )
}