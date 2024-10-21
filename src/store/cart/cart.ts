import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imagen: string;
}

interface State {
    cart: CartItem[];
    addCart: (item: CartItem) => void;
    getTotalItems: () => number;
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
            }
        }),
        { name: 'cart-storage', skipHydration: true })
)
