'use client'
import { useCartStore } from "@/src/store/cart/cart"
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

export const CartProduct = () => {
    const cart = useCartStore((state) => state.cart)
    return (
        <>
            {cart.map((item) => (

                <div key={item.id} className="flex space-x-4 p-4">
                    <div className="aspect-square w-full min-w-40 rounded-2xl lg:aspect-none group-hover:opacity-75 relative overflow-hidden ">
                        <Image
                            src={item.imagen}
                            alt={item.name}
                            className="rounded-t-2xl w-full object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <h3 className="text-lg">{item.name}</h3>
                            <span className="text-sm">{item.name}</span>
                        </div>
                        <div className="flex flex-col items-end mt-auto">
                            <span className="text-lg">Precio: ${item.price}</span>
                            <div className="space-x-2">
                                <button className="bg-primary w-6 h-6 rounded-sm font-bold">
                                    <FiMinus className="inline w-6 h-6" />
                                </button>
                                <span>{item.quantity}</span>
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
            ))}
        </>

    )
}
