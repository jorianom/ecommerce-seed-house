import Link from 'next/link'

const navItems = [
    { href: "/products", label: "Semillas" },
    { href: "/products", label: "Plantas" },
    { href: "/products", label: "Jardineria" },
    { href: "/products", label: "Herramientas" },
    { href: "/products", label: "Fertilizantes" },
    { href: "/products", label: "Macetas" },
]
const navOpt = [
    { href: "/products", label: "Ofertas" },
    { href: "/products", label: "Lo mas vendido" },
    { href: "/products", label: "Lo mas buscado" }
]

export const NavbarCategories = () => {
    return (
        <div className='bg-emerald-50 flex justify-between items-center py-3'>
            <div className='flex flex-col mx-4'>
                {/* {
                    navItems.map((item, index) => (
                        <Link key={index} href={item.href} className='px-2'>{item.label}</Link>
                    ))
                } */}
                {/* <ul className='flex flex-col'> */}
                {
                    navItems.map((item, index) => (
                        <Link key={index} href={item.href} className='px-2'>{item.label}</Link>
                    ))
                }
                {/* </ul> */}
            </div>
            <div className='flex flex-col mx-4'>
                {
                    navItems.map((item, index) => (
                        <Link key={index} href={item.href} className='px-2'>{item.label}</Link>
                    ))
                }
            </div>
            <div>
                {
                    navOpt.map((item, index) => (
                        <Link key={index} href={item.href} className='px-2'>{item.label}</Link>
                    ))
                }
            </div>
        </div>
    )
}
