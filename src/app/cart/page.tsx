import { CartProduct } from "@/src/components/cart/CartProduct"
import { Summary } from "@/src/components/cart/Summary"
import Image from "next/image"
import style from "@/src//components/styles/cart.module.css";

export const Cart = () => {
    return (
        <main>
            {/* <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center"> */}
            <CartProduct />
            {/* </div> */}
        </main>
    )
}

export default Cart