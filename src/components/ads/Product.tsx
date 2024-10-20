import Image from "next/image"
import { CardProduct } from "../products/CardProduct"

interface ProductProps {
    name: string,
    image: string,
    titleProduct: string
}

export const Product = ({ name, image, titleProduct }: ProductProps) => {
    return (

        // <div className="flex items-center justify-center space-x-4" >
        <CardProduct alt={name} srcImg={image} titleP={titleProduct} />
        // </div >
    )
}
