import { create } from "zustand";

interface State {
    isOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
}


export const useUIStore = create<State>()(set => ({
    isOpen: false,
    openSidebar: () => set({ isOpen: true }),
    closeSidebar: () => set({ isOpen: false })
}))