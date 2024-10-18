import { AdsCarousel } from "@/src/components/ads/AdsCarousel";


export default function PublicLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <AdsCarousel />
            {children}
        </div>
    );
}
