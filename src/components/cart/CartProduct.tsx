'use client'
import { CartItem } from "@/src/interfaces"
import { useCartStore } from "@/src/store/cart/cart"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FiMinus } from "react-icons/fi"
import { RiAddFill, RiDeleteBin7Line } from "react-icons/ri"
import style from "@/src//components/styles/cart.module.css";
import { Summary } from "./Summary"
import { formattedNumber } from '../../utils/format';

export const CartProduct = () => {
    const cart = useCartStore((state) => state.cart)
    const updateQuantity = useCartStore((state) => state.updateQuantity)
    const deleteItem = useCartStore((state) => state.deleteItem)
    const totalPrice = useCartStore((state) => state.getTotalPrice())
    const [loaded, setLoaded] = useState(false)

    const handleUpdateQuantity = (item: CartItem, quantity: number) => {
        if (item.quantity + quantity < 1) {
            return
        }
        updateQuantity(item.id, quantity)
    }

    useEffect(() => {
        setLoaded(true)
    }, [])

    if (!loaded) {
        return <h2 className="text-2xl font-bold text-left m-4">Cargando...</h2>
    }
    if (cart.length === 0) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <h2 className="text-2xl font-bold text-left m-4">Tu carrito está vacío</h2>
            </div>)
    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center">
            <div className={`flex flex-col items-center divide-y divide-dashed divide-green-300 w-full max-h-[500px] overflow-y-auto ${style.carScrollbar}`}>
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
                                <span className="text-lg">Precio: ${formattedNumber(item.price)}</span>
                                <div className="space-x-2">
                                    <button onClick={() => handleUpdateQuantity(item, -1)} className="bg-primary w-6 h-6 rounded-sm font-bold">
                                        <FiMinus className="inline w-6 h-6" />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleUpdateQuantity(item, 1)} className="bg-primary rounded-sm">
                                        <RiAddFill className="inline w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <button onClick={() => deleteItem(item.id)} className="bg-danger text-white rounded-sm">
                                <RiDeleteBin7Line className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center w-full">
                <Summary total={totalPrice} />
            </div>
        </div>

    )
}
