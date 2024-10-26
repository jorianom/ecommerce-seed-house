import Image from 'next/image';
import style from '@/src/components/styles/ads.module.css';

export const ImageCarousel = () => {
    const images = [
        "/resources/images/semilla.jpg",
        "/resources/images/flor.jpg",
        "/resources/images/semilla.jpg",
        "/resources/images/flor.jpg",
        "/resources/images/fondo.jpg",
        "/resources/images/flor.jpg",
    ];

    return (
        <div className={`h-40 relative overflow-hidden`}>
            <div className={`flex w-max ${style['carousel-track']}`}>
                {images.concat(images).map((src, index) => (
                    <div key={index} className="aspect-video min-w-64 relative overflow-hidden ">
                        <Image
                            src={src}
                            alt={src}
                            className="object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            priority
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
