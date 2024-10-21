export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imagen: string;
}


export interface Product {
    alt: string,
    id: number,
    name: string,
    image: string,
    titleProduct: string
    price: number,
    description?: string
    discount?: string
}