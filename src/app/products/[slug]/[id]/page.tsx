import { products } from '@/src/interfaces';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        id: string;
    };
}

const page = ({ params }: PageProps) => {
    const { id } = params;
    const productsFilter = products.find(product => product.id == Number(id)) ?? null;
    // console.log("productsFilter ", productsFilter);
    if (!productsFilter) {
        notFound();
    }
    return (
        <p> Product {JSON.stringify(productsFilter)}</p>

    )
}

export default page;