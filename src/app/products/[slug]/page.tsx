import { Products } from '@/src/components/products/Products'
import { products } from '@/src/interfaces';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        slug: string;
    };
}

const page = ({ params }: PageProps) => {
    const { slug } = params;
    const productsFilter = products.filter(product => product.slug === slug);
    if (productsFilter.length === 0) {
        notFound();
    }
    return (
        <Products label="" list={productsFilter} />
    )
}

export default page;