import { NavbarCategories } from "@/src/components/products/NavbarCategories";

export default function PublicLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main className="">
            <p className="flex h-10 items-center justify-center text-center bg-softprimary dark:bg-hardprimary px-4 text-sm font-bold sm:px-6 lg:px-8 dark:text-white">Obten envio gratis por compras superiores a $100</p>
            <NavbarCategories />
            {children}
        </main>
    );
}
