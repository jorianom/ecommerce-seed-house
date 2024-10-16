import { CartProduct } from "@/src/components/cart/CartProduct"
import { Summary } from "@/src/components/cart/Summary"
import Image from "next/image"

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
    }
]

export const Cart = () => {
    return (
        <div className="min-h-screen">
            <h2 className="text-2xl font-bold text-left m-4">Tu Carrito </h2>
            <hr className="bg-primary" />
            {/* <div className="flex flex-col lg:flex-row items-center justify-center"> */}
                <div className="flex flex-col items-center justify-center divide-y divide-dashed divide-green-300">
                    {cart.map((item) => (
                        <CartProduct key={item.name} name={item.name} description={item.description} price={item.price} quantity={item.quantity} image={item.image} />
                    ))}
                </div>
                <Summary />
            {/* </div> */}
        </div>
    )
}

export default Cart