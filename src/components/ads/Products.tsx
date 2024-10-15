import Image from "next/image"
import { Product } from "./Product"

interface ProductsProps {
    label: string,
    list: { name: string, image: string }[]
}

export const Products = ({ label, list }: ProductsProps) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-left m-4">{label}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4">
                {/* <div className="flex items-center justify-center">
                <Image src="/resources/images/flor.jpg" width={200} height={200} alt="Categories">
                </Image>
            </div> */}
                {list.map((item) => (
                    <div className="flex items-center justify-center p-2">
                        <Product key={item.name} name={item.name} image={item.image} />
                    </div>
                ))}
            </div>
        </>
    )
}
