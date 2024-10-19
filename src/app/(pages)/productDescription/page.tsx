import type { Metadata } from "next";
import Carousel from "../../../components/generalProduct/Carousel";
import ProductFeatures from "../../../components/generalProduct/ProductFeatures"


export const metadata: Metadata = {
    title: "Nombre del Producto",
    description: "Descripción del producto",
    keywords: ["Caracteristicas del producto", "e-commerce", "plantas", "jardineria"],
};

export default function DescriptionProductPage() {
    return (
        <main className="">
           <div className="flex flex-col sm:flex-row gap-4 p-2 border-b-[1px]">
            <div className="sm:w-2/3 w-full rounded-2xl">
            <Carousel />
            <ProductFeatures />
            </div>
            <div className="sm:w-1/3 w-full rounded-2xl aspect-video grid grid-rows-5 grid-flow-col gap-4 text-wrap truncate h-[550px] border-[1px] p-6">
            <h1 className="gap-4 rounded-2xl text-2xl font-bold h-[100px]">Título del producto</h1>
            <div className="flex flex-row container mx-auto mt-6 h-[40px]">
          <div className="flex flex-row items-center">
          <div className="basis-1/2 text-2xl font-bold text-[#374151]">
            <span className="">$100.000</span>
          </div>
          <div className="basis-1/4 text-2lg font-bold text-[#ff2828]">
            <span>-20%</span>
          </div>
          </div>
          <div className="flex justify-end w-full">
            <button className="bg-primary text-[#ffffff] font-bold text-base p-2 rounded-2xl hover:bg-hardprimary active:scale-95 transition-transform transform">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
            </button>
          </div>
        </div>
            <div className="gap-4 rounded-2xl h-[100px]">
            <h1 className="">Opciones de personalización</h1>
            </div>
            <h1 className="gap-4 rounded-2xl h-[100px]">Cantidad</h1>
            <div className="flex flex-col lg:flex-row gap-3 h-[40px] text-wrap">
            <button className="bg-primary hover:bg-hardprimary text-white font-semibold py-2 px-4 rounded-md w-full">Comprar</button>
            <button className=" hover:bg-hardprimary bg-primary text-white font-semibold py-2 px-4 rounded-md w-full">Ver Carrito</button>
            </div>
            </div>
           </div>
        </main>
    )
}


