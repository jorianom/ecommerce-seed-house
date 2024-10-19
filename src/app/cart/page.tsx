import { CartProduct } from "@/src/components/cart/CartProduct"
import { Summary } from "@/src/components/cart/Summary"
import Image from "next/image"
import style from "@/src//components/styles/cart.module.css";

const cart = [
    {
        name: "Producto 1",
        description: "Description",
        price: 100,
        quantity: 1,
        image: "/resources/images/flor.jpg"
    },
    {
        name: "Producto 2",
        description: "Description",
        price: 200,
        quantity: 2,
        image: "/resources/images/flor.jpg"
    },
    {
        name: "Producto 3",
        description: "Description",
        price: 300,
        quantity: 3,
        image: "/resources/images/flor.jpg"
    },
    {
        name: "Producto 4",
        description: "Description",
        price: 400,
        quantity: 4,
        image: "/resources/images/flor.jpg"
    }
]

export const Cart = () => {
    return (
        <>
            <h2 className="text-2xl font-bold text-left m-4">Tu Carrito </h2>
            <hr className="bg-primary h-px" />
            <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center">
                {/* <div className="flex flex-col lg:flex-row"> */}
                <div className={`flex flex-col items-center divide-y divide-dashed divide-green-300 w-full max-h-[500px] overflow-y-auto ${style.hideScrollbar}`}>
                    {cart.map((item) => (
                        <CartProduct key={item.name} name={item.name} description={item.description} price={item.price} quantity={item.quantity} image={item.image} />
                    ))}
                </div>
                <div className="flex items-center justify-center w-full">
                    <Summary />
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Cart