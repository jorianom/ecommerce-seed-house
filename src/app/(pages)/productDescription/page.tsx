import type { Metadata } from "next";
import Carousel from "../../../components/generalProduct/Carousel";
import ProductFeatures from "../../../components/generalProduct/ProductFeatures"
import PaymentMethods from "../../../components/generalProduct/PaymentMethods"
import { FiMinus } from "react-icons/fi";
import { RiAddFill } from "react-icons/ri";


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
        <div className="sm:w-1/3" >
          <div className="w-full rounded-2xl aspect-video grid grid-rows-5 grid-flow-col gap-4 text-wrap truncate h-[550px] border-[1px] p-6">
            <h1 className="gap-4 rounded-2xl text-2xl font-bold h-[100px]">Título del producto</h1>
            <div className="flex flex-row container mx-auto mt-6 h-[40px]">
              <div className="flex flex-row items-center">
                <div className="basis-1/2 text-4xl font-bold text-[#374151]">
                  <span className="">$100.000</span>
                </div>
                <div className="basis-1/4 text-2lg font-bold text-[#ff2828]">
                  <span>-20%</span>
                </div>
              </div>
            </div>
            <div className="gap-4 rounded-2xl h-[100px]">
              <h1 className="">Opciones de personalización</h1>
            </div>
            <h1 className="gap-4 rounded-2xl h-[100px]">
              <h1 className="">Cantidad: </h1>
              <div className="space-x-2 ">
                <button className="bg-primary hover:bg-hardprimary text-white font-semibold py-2 px-2 rounded-md">
                  <FiMinus className="inline w-6 h-6" />
                </button>
                {/* <span>{quantity}</span> */}
                <button className="bg-primary hover:bg-hardprimary text-white font-semibold py-2 px-2 rounded-md">
                  <RiAddFill className="inline w-6 h-6" />
                </button>
              </div>
            </h1>
            <div className="flex flex-col lg:flex-row gap-3 h-[40px] text-wrap">
              <button className="bg-primary hover:bg-hardprimary text-white font-semibold py-2 px-4 rounded-md w-full">Comprar</button>
              <button className=" hover:bg-hardprimary bg-primary text-white font-semibold py-2 px-4 rounded-md w-full">Ver Carrito</button>
            </div>
          </div>
          <PaymentMethods  />
        </div>

      </div>
    </main>
  )
}


