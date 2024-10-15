'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "../styles/navbar.module.css";

interface ActiveLinkProps {
    href: string;
    label: string | JSX.Element;
    isIcon?: boolean;
}


export const ActiveLink = ({ href, label, isIcon = false }: ActiveLinkProps) => {
    const path = usePathname();
    return (
        <Link href={href} className={`px-2 ${style.link} ${path == href ? `${style.linkActive}` : ""
            } ${isIcon ? style.linkIcon : style.linkHover}`}>
            {label}
        </Link>
    )
}
