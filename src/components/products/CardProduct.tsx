import Image from "next/image";

interface CardProps {
  alt: string,
  srcImg: string,
  titleP: string
}


export const CardProduct = ({ alt, srcImg, titleP }: CardProps) => {
  return (
    <div className="flex flex-col w-full bg-[#ffffff] shadow-xl rounded-2xl">
      <figure className="aspect-square rounded-2xl bg-gray-200 group-hover:opacity-75">
        <Image width={100} height={100}
        src= {srcImg}
        alt={alt}
        className="rounded-t-2xl w-full h-full object-cover"></Image>
      </figure>
      <div className="flex-col p-8">
        <div className="text-sm/loose text-[#374151] h-14 text-wrap truncate">
            <span className="text-clip">
              {titleP}
            </span>
        </div>

        <div className="flex flex-row container mx-auto mt-6 ">
          <div className="flex flex-row items-center	">
          <div className="basis-1/2 text-2xl font-bold text-[#374151]">
            <span className="">$100.000</span>
          </div>
          <div className="basis-1/4 text-2lg font-bold text-[#ff2828]">
            <span>-20%</span>
          </div>
          </div>
          <div className="flex justify-end w-full">
            <button className="bg-[#16a34a] text-[#ffffff] font-bold text-base p-2 rounded-lg hover:bg-[#15803d] active:scale-95 transition-transform transform">

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
            <span className="text-[#374151] text-sm/3 mt-4">
              Disponible 2 días después de tu compra
            </span>
      </div>
    </div>
  );
};
