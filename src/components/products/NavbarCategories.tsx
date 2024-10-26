import Link from 'next/link'
import { ListColumns } from './ListColumns';

const navOpt = [
    { id: 1, href: "/products", label: "Ofertas", className: "bg-danger hover:bg-red-600 text-white py-2 px-4 rounded-full  text-center" },
    { id: 2, href: "/products", label: "Lo mas vendido", className: "bg-primary hover:bg-hardprimary text-white py-2 px-4 rounded-full  text-center" },
    { id: 3, href: "/products", label: "Lo mas buscado", className: "bg-warning hover:bg-orange-600 text-white py-2 px-4 rounded-full  text-center" }
]

const items = [
    { href: "/products", label: "Semillas", slug: "semillas" },
    { href: "/products", label: "Plantas", slug: "plantas" },
    { href: "/products", label: "Jardineria", slug: "jardineria" },
    { href: "/products", label: "Herramientas", slug: "herramientas" },
    { href: "/products", label: "Fertilizantes", slug: "fertilizantes" },
    { href: "/products", label: "Macetas", slug: "macetas" },
    { href: "/products", label: "Fungicidas", slug: "fungicidas" },
    { href: "/products", label: "Importado", slug: "importado" },
    { href: "/products", label: "Bolsas", slug: "bolsas" },
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
                        <Link key={item.id} href={item.href} className={`mx-2 ${item.className}`}>{item.label}</Link>
                    ))
                }
            </div>
        </div>
    )
}
