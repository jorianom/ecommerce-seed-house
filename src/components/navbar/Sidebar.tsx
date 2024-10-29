'use client'
import { IoClose } from "react-icons/io5"
import Link from "next/link"
import { useUIStore } from "@/src/store/ui/ui"
import { FaBoxes } from "react-icons/fa"
import { MdModeComment } from "react-icons/md"


export const Sidebar = () => {
    const isOpen = useUIStore(state => state.isOpen)
    const closeSidebar = useUIStore(state => state.closeSidebar)
    return (
        <>
            {
                isOpen && (
                    <div
                        className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                    />

                )
            }
            {
                isOpen && (
                    <button
                        onClick={closeSidebar}
                        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                        aria-label="Close sidebar"
                    />

                )
            }
            <nav className={`fixed right-0 top-0 w-4/5 h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 ${!isOpen ? 'translate-x-full' : ''}`}>
                <div className="flex items-center bg-primary px-5 py-5 text-white">
                    <span className="antialiased ">La casa de las semillas</span>
                </div>
                <IoClose size={40}
                    onClick={() => closeSidebar()}
                    className="absolute top-0 right-0 mx-2 cursor-pointer text-white"
                />
                <div className="p-5">
                    <Link
                        href="/products"
                        onClick={() => closeSidebar()}
                        className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
                    >
                        <FaBoxes size={30} />
                        <span className="ml-3 text-xl">Productos</span>
                    </Link>
                    <div className="w-full h-px bg-primary" />
                    <Link
                        href="/about"
                        onClick={() => closeSidebar()}
                        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                    >
                        <MdModeComment size={30} />
                        <span className="ml-3 text-xl">Sobre Nosotros</span>
                    </Link>
                    <div className="w-full h-px bg-primary" />
                </div>
            </nav >
        </>
    )
}

