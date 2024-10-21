import { CartItem } from '@/src/interfaces';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


interface State {
    cart: CartItem[];
    addCart: (item: CartItem) => void;
    getTotalItems: () => number;
    updateQuantity: (id: number, quantity: number) => void;
    deleteItem: (id: number) => void;
    getTotalPrice: () => number;
}

export const useCartStore = create<State>()(
    persist(
        (set, get) => ({
            cart: [],
            addCart: (item: CartItem) => {
                const { cart } = get();
                const exist = cart.some((i) => i.id === item.id);
                if (!exist) {
                    set({ cart: [...cart, item] });
                    return;
                }
                const updateCart = cart.map((i) => {
                    if (i.id === item.id) {
                        return { ...i, quantity: i.quantity + item.quantity };
                    }
                    return i;
                });
                set({ cart: updateCart });
            },
            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce((acc, item) => acc + item.quantity, 0);
            },
            updateQuantity: (id: number, quantity: number) => {
                const { cart } = get();
                const updateCart = cart.map((i) => {
                    if (i.id === id) {
                        return { ...i, quantity: quantity + i.quantity };
                    }
                    return i;
                });
                set({ cart: updateCart });
            },
            deleteItem: (id: number) => {
                const { cart } = get();
                const updateCart = cart.filter((i) => i.id !== id);
                set({ cart: updateCart });
            },
            getTotalPrice: () => {
                const { cart } = get();
                return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            },
        }),
        { name: 'cart-storage' })
)
