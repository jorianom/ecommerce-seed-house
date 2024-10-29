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
    slug: string
}


export const products = [
    {
        id: 1,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Frutas",
        image: "/resources/images/semilla.jpg",
        titleProduct: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        price: 100000,
        slug: "semillas",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium."
    },

    {
        id: 2,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Árboles",
        image: "/resources/images/flor.jpg",
        titleProduct: "Unas matas ahí",
        price: 1000000,
        slug: "importado",
        discount: "-20%"
    },
    {
        id: 3,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Árboles",
        image: "/resources/images/flor.jpg",
        titleProduct: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium.",
        price: 100000,
        slug: "macetas",
        discount: "-20%"
    },
    {
        id: 4,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Frutas",
        image: "/resources/images/semilla.jpg",
        titleProduct: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        price: 100000,
        slug: "jardineria",
        discount: "-60%"
    },

    {
        id: 5,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Árboles",
        image: "/resources/images/flor.jpg",
        titleProduct: "Unas matas ahí",
        price: 100000,
        slug: "fertilizantes",
        discount: "-10%"
    },
    {
        id: 6,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Árboles",
        image: "/resources/images/flor.jpg",
        titleProduct: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium.",
        price: 100000,
        slug: "semillas",
        discount: "-30%"
    },
    {
        id: 6,
        alt: "Matera Decorativa Robert + Suculenta + Sustrato + Piedras",
        name: "Árboles",
        image: "/resources/images/flor.jpg",
        titleProduct: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi sequi itaque sed aut qui modi obcaecati dolore, cumque neque animi expedita est cupiditate, reiciendis necessitatibus non at accusamus praesentium.",
        price: 100000,
        slug: "semillas",
        discount: "-30%"
    }
]

export const categories = [{
    "title": "Semillas",
    "id": "68819290-d4b6-4a29-ba1f-7505065e0664",
    "image": "https://picsum.photos/200/200?random",
    "alt": "Bacitracin Zinc",
    "slug": "semillas"
}, {
    "title": "Fertiliazantes",
    "id": "1675f317-c9f8-431b-8de0-90f43c3fa521",
    "image": "https://picsum.photos/200/200?random",
    "alt": "Lidocaine Hydrochloride",
    "slug": "fertilizantes"
}, {
    "title": "Macetas",
    "id": "fa8fd79c-484e-4099-8965-0939966336f7",
    "image": "https://picsum.photos/200/200?random",
    "alt": "VALACYCLOVIR HYDROCHLORIDE",
    "slug": "macetas"
}, {
    "title": "Importado",
    "id": "58dc17b8-3633-4284-84ca-a00297b3e0dd",
    "image": "https://picsum.photos/200/200?random",
    "alt": "Nitrous Oxide",
    "slug": "importado"
}, {
    "title": "Semillas",
    "id": "ce64c699-dbb2-4388-953f-d54443874abe",
    "image": "https://picsum.photos/200/200?random",
    "alt": "Jute",
    "slug": "semillas"
}, {
    "title": "frutas",
    "id": "e539021d-5b9b-46c5-9026-72d789ed29b0",
    "image": "https://picsum.photos/200/200?random",
    "alt": "H-E-B Skin Corrective Innovative Skin Perfector BB Broad Spectrum SPF15 Sunscreen Medium/Deep",
    "slug": "frutas"
}, {
    "title": "cereales",
    "id": "7b5ad58f-f148-451f-9cfc-4f9b5a68776c",
    "image": "https://picsum.photos/200/200?random",
    "alt": "CARDIGAN",
    "slug": "cereales"
}, {
    "title": "verduras",
    "id": "a98bb773-d58b-4d65-b8df-32556a7b228d",
    "image": "https://picsum.photos/200/200?random",
    "alt": "Oratox",
    "slug": "verduras"
}, {
    "title": "legumbres",
    "id": "162f5723-319e-4bb8-b68a-59a47d5c6f76",
    "image": "https://picsum.photos/200/200?random",
    "alt": "Magnesium Sulfate",
    "slug": "legumbres"
}]