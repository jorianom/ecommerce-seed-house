'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "../styles/navbar.module.css";
import { useCartStore } from "@/src/store/cart/cart";
import { useEffect, useState } from "react";

interface ActiveLinkProps {
    href: string;
    label: string | JSX.Element;
    span?: boolean;
}


export const IconLink = ({ href, label, span = false }: ActiveLinkProps) => {
    const [loaded, setLoaded] = useState(false);
    const getTotalItems = useCartStore((state) => state.getTotalItems());
    const path = usePathname();

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <Link href={href} className={`mx-2 ${style.linkIcon} ${path == href ? `${style.linkActive}` : ''}`} >
            <div className="relative">
                {loaded && span && getTotalItems > 0 ?
                    <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-hardprimary text-white">
                        {getTotalItems}</span> : null}
                {label}
            </div>
        </Link>
    )
}
