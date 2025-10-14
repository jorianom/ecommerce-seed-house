// import Image from "next/image"
import { Product } from "@/src/interfaces"
// import { CardProduct } from "./CardProduct"
import { PdfViewer } from "./PdfViewer"


interface ProductsProps {
    label: string,
    list: Product[]
}

export const Products = ({ label, list }: ProductsProps) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-left m-4">{label}</h2>
            <p className="text-center text-primary text-lg font-semibold mb-4 animate-float">
                Contáctenos para obtener más información y recibir su cotización personalizada a los precios más competitivos.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-4 pb-4 dark:bg-gray-900">
                {list.map((item) => (
                    // <CardProduct key={item.id} item={{ ...item }} />
                    <PdfViewer key={item.id} fileUrl={item.fileUrl!} imageUrl={item.image} alt={item.alt} titleProduct={item.titleProduct} />
                ))}
            </div>
        </>
    )
}
