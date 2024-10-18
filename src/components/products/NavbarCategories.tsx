import Link from 'next/link'
import style from "../styles/navbar.module.css";

const navItems = [
    { href: "/products", label: "Semillas" },
    { href: "/products", label: "Plantas" },
    { href: "/products", label: "Jardineria" },
    { href: "/products", label: "Herramientas" },
    { href: "/products", label: "Fertilizantes" },
    { href: "/products", label: "Macetas" },
]
const navOpt = [
    { href: "/products", label: "Ofertas", className: "bg-danger hover:bg-red-600 text-white py-2 px-4 rounded-full  text-center" },
    { href: "/products", label: "Lo mas vendido", className: "bg-primary hover:bg-hardprimary text-white py-2 px-4 rounded-md  text-center" },
    { href: "/products", label: "Lo mas buscado", className: "bg-warning hover:bg-orange-600 text-white py-2 px-4 rounded-md  text-center" }
]

export const NavbarCategories = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row place-content-around p-4 bg-emerald-50 text-left items-center'>
            <div className='mx-4 flex'>
                <ul className='flex flex-col px-5'>
                    {
                        navItems.map((item, index) => (
                            <Link key={index} href={item.href} className={`px-2 ${style.linkHover}`}>{item.label}</Link>
                        ))
                    }
                </ul>
                <ul className='flex flex-col px-5'>
                    {
                        navItems.map((item, index) => (
                            <Link key={index} href={item.href} className={`px-2 ${style.linkHover}`}>{item.label}</Link>
                        ))
                    }
                </ul>
            </div>
            <div className='p-4 flex items-center'>
                {
                    navOpt.map((item, index) => (
                        <Link key={index} href={item.href} className={`mx-2 ${item.className}`}>{item.label}</Link>
                    ))
                }
            </div>
        </div>
    )
}
