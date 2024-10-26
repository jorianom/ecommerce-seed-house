import { Products } from '@/src/components/ads/Products'
import { products } from '../page';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        id: string;
    };
}

const page = ({ params }: PageProps) => {
    const { id } = params;
    const productsFilter = products.filter(product => product.slug === id);

    if (productsFilter.length === 0) {
        notFound();
    }
    return (
        <Products label="" list={productsFilter} />

    )
}

export default page;