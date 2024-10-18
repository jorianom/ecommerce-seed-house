// import Image from "next/image"
import { Product } from "./Product"

interface ProductsProps {
    label: string,
    list: { id: number, name: string, image: string, titleProduct: string }[]
}

export const Products = ({ label, list }: ProductsProps) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-left m-4">{label}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {/* <div className="flex items-center justify-center">
                <Image src="/resources/images/flor.jpg" width={200} height={200} alt="Categories">
                </Image>
            </div> */}
                {list.map((item) => (
                    <div key={item.id} className="flex items-center justify-center p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
                        <Product name={item.name} image={item.image} titleProduct={item.titleProduct} />
                    </div>
                ))}
            </div>
        </>
    )
}
