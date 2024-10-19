import Link from 'next/link'
import { ListColumns } from './ListColumns';

const navOpt = [
    { href: "/products", label: "Ofertas", className: "bg-danger hover:bg-red-600 text-white py-2 px-4 rounded-full  text-center" },
    { href: "/products", label: "Lo mas vendido", className: "bg-primary hover:bg-hardprimary text-white py-2 px-4 rounded-full  text-center" },
    { href: "/products", label: "Lo mas buscado", className: "bg-warning hover:bg-orange-600 text-white py-2 px-4 rounded-full  text-center" }
]

const items = [
    { href: "/products", label: "Semillas" },
    { href: "/products", label: "Plantas" },
    { href: "/products", label: "Jardineria" },
    { href: "/products", label: "Herramientas" },
    { href: "/products", label: "Fertilizantes" },
    { href: "/products", label: "Macetas" },
    { href: "/products", label: "Fungicidas" },
    { href: "/products", label: "Importado" },
    { href: "/products", label: "Bolsas" }
]

export const NavbarCategories = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row place-content-around p-4 bg-emerald-50 text-left items-center'>
            <div className='flex space-x-4'>
                <ListColumns items={items} n={3} />
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
