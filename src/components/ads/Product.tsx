import Image from "next/image"
import { CardProduct } from "../products/CardProduct"

interface ProductProps {
    name: string,
    image: string,
    titleProduct: string
}

export const Product = ({ name, image, titleProduct }: ProductProps) => {
    return (
        <CardProduct alt={name} srcImg={image} titleP={titleProduct} />

    )
}
