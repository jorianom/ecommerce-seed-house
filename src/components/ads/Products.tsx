// import Image from "next/image"
import { Product } from "@/src/interfaces"
import { CardProduct } from "../products/CardProduct"


interface ProductsProps {
    label: string,
    list: Product[]
}

export const Products = ({ label, list }: ProductsProps) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-left m-4">{label}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-4 pb-4">
                {list.map((item) => (
                    <CardProduct key={item.id} item={{ ...item }} />
                ))}
            </div>
        </>
    )
}
