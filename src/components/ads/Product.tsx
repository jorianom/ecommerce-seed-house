import Image from "next/image"
import { CardProduct } from "../products/CardProduct"

interface ProductProps {
    name: string,
    image: string
}

export const Product = ({ name, image }: ProductProps) => {
    return (
        // <Image src={image} width={200} height={200} alt={name}>
        // </Image>
        <CardProduct />
    )
}
