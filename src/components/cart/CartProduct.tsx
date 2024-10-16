import Image from "next/image"
import { FiMinus } from "react-icons/fi"
import { RiAddFill, RiDeleteBin7Line } from "react-icons/ri"

interface CartProductProps {
    name: string,
    description: string,
    price: number,
    quantity: number,
    image: string
}

export const CartProduct = ({ name, description, price, quantity, image }: CartProductProps) => {
    return (

        <div className="flex space-x-4 p-4">
            <Image src={image} width={200} height={200} alt="productcart" />
            <div className="flex flex-col">
                <div>
                    <h3 className="text-lg">{name}</h3>
                    <span className="text-sm">{description}</span>
                </div>
                <div className="flex flex-col items-end mt-auto">
                    <span className="text-lg">Precio: ${price}</span>
                    <div className="space-x-2">
                        <button className="bg-primary w-6 h-6 rounded-sm font-bold">
                            <FiMinus className="inline w-6 h-6" />
                        </button>
                        <span>{quantity}</span>
                        <button className="bg-primary rounded-sm">
                            <RiAddFill className="inline w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="">
                <button className="bg-danger text-white rounded-sm">
                    <RiDeleteBin7Line className="w-6 h-6" />
                </button>
            </div>
        </div>

    )
}
