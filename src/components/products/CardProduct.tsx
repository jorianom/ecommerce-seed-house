import Image from "next/image";
import { CartButton } from "../cart/CartButton";
import { Product } from "@/src/interfaces";
import { formattedNumber } from '../../utils/format';

interface CardProductProps {
  item: Product;
}

export const CardProduct = ({ item }: CardProductProps) => {
  return (
    <div className="flex flex-col w-full bg-white shadow-md rounded-2xl">
      <div className="aspect-square w-full rounded-2xl lg:aspect-none group-hover:opacity-75 relative overflow-hidden ">
        <Image
          src={item.image}
          alt={item.alt}
          className="rounded-t-2xl w-full object-cover p-1"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="flex-col p-4">
        <div className="text-sm/loose h-14 text-wrap truncate">
          <span className="text-clip">
            {item.titleProduct}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row mt-2 lg:space-x-2 w-full max-w-lg mx-auto">
          <div className="relative flex justify-center items-center w-full">
            <span className="text-xl md:text-2xl font-bold lg:text-left text-gray-800">${formattedNumber(item.price, 0)}</span>
            {
              // <span className="text-sm/3 font-bold text-gray-500 line-through lg:text-left">{item.discount}</span>
              item.discount && (
                <span className="ml-1 bg-danger text-white px-2 rounded-full text-sm md:text-base">
                  {item.discount ? item.discount : "0%"}
                </span>
              )
            }
          </div>
          <CartButton item={item} />
        </div>

        <span className="hidden md:block text-sm/3 mt-4 ">
          Disponible 2 días después de tu compra
        </span>
      </div>
    </div >
  );
};
