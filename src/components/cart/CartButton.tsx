'use client'
import { Product } from "@/src/interfaces"
import { useCartStore } from "@/src/store/cart/cart"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { CartItem } from '../../interfaces/index';

interface CartButtonProps {
    item: Product
}

export const CartButton = ({ item }: CartButtonProps) => {
    const addToCart = useCartStore((state) => state.addCart)
    const addItem = () => {
        const cartItem: CartItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
            imagen: item.image
        }
        addToCart(cartItem)
    }

    return (
        <div className="flex justify-end p-2 md:p-0 text-center">
            <button onClick={addItem} className="flex justify-center items-center bg-primary font-bold p-1 sm:p-2 rounded-lg hover:bg-hardprimary w-full text-center">
                <HiOutlineShoppingBag className="w-6 h-6" color="white" />
            </button>
        </div>
    )
}
