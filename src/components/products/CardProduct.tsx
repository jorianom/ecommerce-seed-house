import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi";

interface CardProps {
  alt: string,
  srcImg: string,
  titleP: string
}


export const CardProduct = ({ alt, srcImg, titleP }: CardProps) => {
  return (
    <div className="flex flex-col w-full bg-white shadow-md rounded-2xl">
      <div className="aspect-square w-full rounded-2xl lg:aspect-none group-hover:opacity-75 relative overflow-hidden ">
        <Image
          src={srcImg}
          alt={alt}
          className="rounded-t-2xl w-full object-cover p-1"
          layout="fill"
        />
      </div>
      <div className="flex-col p-4">
        <div className="text-sm/loose h-14 text-wrap truncate">
          <span className="text-clip">
            {titleP}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row mt-2 lg:space-x-2 w-full max-w-lg mx-auto">
          <div className="relative flex justify-center items-center w-full">
            <span className="text-xl md:text-2xl font-bold lg:text-left text-gray-800">$100.000</span>
            <span className="ml-1 bg-danger text-white px-2 rounded-full text-sm md:text-base">
              -20%
            </span>
          </div>
          <div className="flex justify-end p-2 md:p-0 text-center">
            <button className="flex justify-center items-center bg-primary font-bold p-1 sm:p-2 rounded-lg hover:bg-hardprimary w-full text-center">
              <HiOutlineShoppingBag className="w-6 h-6" color="white" />
            </button>
          </div>
        </div>

        <span className="hidden md:block text-sm/3 mt-4 ">
          Disponible 2 días después de tu compra
        </span>
      </div>
    </div >
  );
};
