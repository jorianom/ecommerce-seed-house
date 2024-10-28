'use client'
import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "./ActiveLink";
import { BsCart4, BsSearch } from "react-icons/bs";
import style from "../styles/navbar.module.css";
import { IconLink } from "./IconLink";
import { CiMenuFries } from "react-icons/ci";
import { useUIStore } from "@/src/store/ui/ui";


const navItems = [
    { href: "/about", label: "¿Quienes Somos?" },
    { href: "/products", label: "Productos" },
    { href: "/contact", label: "Contacto" },
]

const navIcons = [
    // { href: "/example", label: <BsSearch className={`iconL w-5 h-5 ${style.iconL}`} /> },
    { href: "/cart", label: <BsCart4 className={`iconL w-5 h-5 ${style.iconL}`} />, span: true },
    // { href: "/", label: <CiMenuFries className={`iconL w-5 h-5 ${style.iconL}`} /> },
]

export default function Navbar() {
    const openSidebar = useUIStore(state => state.openSidebar)
    return (
        <nav className="flex px-5 py-5 justify-between items-center w-full bg-primary text-white">
            <div>
                <Link href="/" className="flex items-center">
                    <HomeIcon className="mr-2 w-5 h-5" />
                    <span className="antialiased font-bold">La casa de las semillas</span>
                </Link>
            </div>
            <div className="hidden sm:block">
                {
                    navItems.map((item, index) => (
                        <ActiveLink key={index} href={item.href} label={item.label} />
                    ))
                }
            </div>
            <div className="flex items-center">
                <BsSearch className={`iconL w-5 h-5 ${style.iconL}`} />
                {
                    navIcons.map((item, index) => (
                        <IconLink key={index} href={item.href} label={item.label} span={item.span} />
                    ))
                }
                <CiMenuFries className={`sm:hidden iconL w-5 h-5 ${style.iconL}`} onClick={() => openSidebar()} />
            </div>
        </nav>
    );
}