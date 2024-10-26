'use client'
import Image from "next/image";
import '../styles/utils.css';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Categorie {
    id: string;
    title: string;
    image: string;
    alt: string;
    slug: string;
}
interface CardCategorieProps {
    item: Categorie[];
}

export const CardCategorie = ({ item }: CardCategorieProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(1);
    const isMediumScreen = () => window.innerWidth >= 768;

    useEffect(() => {
        let animationFrameId: number;
        let scrollSpeed = 1; // Velocidad de desplazamiento
        const moveScroll = () => {
            if (scrollContainerRef.current && !isPaused) {
                const scrollContainer = scrollContainerRef.current;
                scrollContainer.scrollLeft += scrollSpeed * scrollDirection;

                // Si llegamos al final, invertimos la dirección
                if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                    setScrollDirection(-1);
                }

                // Si estamos al principio, cambiamos la dirección hacia adelante
                if (scrollContainer.scrollLeft <= 0) {
                    setScrollDirection(1);
                }
            }

            animationFrameId = requestAnimationFrame(moveScroll);
        };
        if (isMediumScreen()) {
            animationFrameId = requestAnimationFrame(moveScroll);
        }

        const handleResize = () => {
            if (!isMediumScreen()) {
                cancelAnimationFrame(animationFrameId); // Detener animación en pantallas pequeñas
            } else {
                animationFrameId = requestAnimationFrame(moveScroll); // Reiniciar animación si cambia a pantallas más grandes
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, [isPaused, scrollDirection]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };
    const scrollLeft = () => {
        const categories = document.getElementById('categories');
        if (categories) {
            categories.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        const categories = document.getElementById('categories');
        if (categories) {
            categories.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };
    return (
        <>
            <h2 className="text-2xl font-bold text-left m-4">Categorias </h2>
            <div
                className="relative group w-full overflow-hidden"
            >
                <div className="flex px-2 gap-2 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
                    ref={scrollContainerRef}
                    id="categories"
                >
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                        onClick={scrollLeft}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        ←
                    </button>
                    {
                        item.map((categorie) => (
                            <div key={categorie.id} className="flex flex-col bg-white rounded-lg shadow-md w-full max-w-36 xl:max-w-52 mx-auto shrink-0">
                                <Link href={`/products/${categorie.slug}`}>
                                    <button className="w-full focus:outline-none"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}>
                                        <Image
                                            src={categorie.image}
                                            alt={categorie.alt}
                                            width={400}
                                            height={400}
                                            className="rounded-t-xl h-32 xl:h-48 w-full object-cover aspect-square"
                                        ></Image>
                                        <h2 className="text-md font-bold text-gray-800 mt-1 text-center">{categorie.title}</h2>
                                    </button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                    onClick={scrollRight}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    →
                </button>
            </div >
        </>
    )
}
