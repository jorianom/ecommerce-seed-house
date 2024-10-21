import { CartProduct } from "@/src/components/cart/CartProduct"
import { Summary } from "@/src/components/cart/Summary"
import Image from "next/image"
import style from "@/src//components/styles/cart.module.css";

export const Cart = () => {
    return (
        <>
            <h2 className="text-2xl font-bold text-left m-4">Tu Carrito </h2>
            <hr className="bg-primary h-px" />
            <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center">
                <CartProduct />
            </div>
        </>
    )
}

export default Cart