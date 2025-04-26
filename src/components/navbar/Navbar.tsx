'use client'
import Link from "next/link";
import { ActiveLink } from "./ActiveLink";
import { BsCart4, BsSearch } from "react-icons/bs";
import style from "../styles/navbar.module.css";
import { IconLink } from "./IconLink";
import { CiMenuFries } from "react-icons/ci";
import { useUIStore } from "@/src/store/ui/ui";
import { FaSeedling } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const navIcons = [
    // { href: "/example", label: <BsSearch className={`iconL w-5 h-5 ${style.iconL}`} /> },
    { href: "/cart", label: <BsCart4 className={`iconL w-5 h-5 ${style.iconL}`} />, span: true },
    // { href: "/", label: <CiMenuFries className={`iconL w-5 h-5 ${style.iconL}`} /> },
]

const getNavItems = (path: string) => {
    if (path === "/") {
        return [
            { href: "/about", label: "Sobre Nosotros" },
            { href: "/about", label: "Sobre Nosotros" },
            { href: "/contact", label: "Contacto" },
        ];
    }
    return [
        { href: "/about", label: "Sobre Nosotros" },
        { href: "/products", label: "Productos" },
        { href: "/contact", label: "Contacto" },
    ];
};

export default function Navbar() {
    const path = usePathname();
    const openSidebar = useUIStore(state => state.openSidebar);
    let navItems = getNavItems(path);

    return (
        <nav className="flex px-5 py-5 justify-between items-center w-full bg-primary text-white">
            <div>
                <Link href="/" className="flex items-center">
                    <FaSeedling className="mr-2 w-5 h-5" />
                    <span className="antialiased font-bold">La casa de las semillas</span>
                </Link>
            </div>
            <div className="hidden sm:block">
                {
                    navItems.map((item) => (
                        <ActiveLink key={item.href} href={item.href} label={item.label} />
                    ))
                }
            </div>
            <div className="flex items-center">
                {
                    path != "/" ?
                        <>

                            <BsSearch className={`iconL w-5 h-5 ${style.iconL}`} />
                            {
                                navIcons.map((item) => (
                                    <IconLink key={item.href} href={item.href} label={item.label} span={item.span} />
                                ))
                            }
                        </>
                        : null
                }
                <CiMenuFries className={`sm:hidden iconL w-5 h-5 ${style.iconL}`} onClick={() => openSidebar()} />
            </div>
        </nav>
    );
}