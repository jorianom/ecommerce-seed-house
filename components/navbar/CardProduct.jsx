import React from "react";

const CardProduct = () => {
  return (
    <div class="flex flex-col rounded-2xl w-96 bg-[#ffffff] shadow-xl">
      <figure class="flex justify-center items-center rounded-2xl">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_2X_728994-MCO54973105806_042023-F.webp"
          alt="Vista previa de la tarjeta"
          class="rounded-t-2xl w-full h-80 object-cover"
        />
      </figure>
      <div class="flex flex-col p-8">
        <div class="text-sm/loose   text-[#374151]">
          <font>
            <font>
              Matera Decorativa Robert + Suculenta + Sustrato + Piedras{" "}
            </font>
          </font>
        </div>

        <div className="columns-3 mt-6">
          <div class="text-2xl font-bold text-[#374151]">
            <font>$100.000</font>
          </div>
          <div class="text-2lg font-bold text-[#ff2828]">
            <font>-20%</font>
          </div>
          <div class="flex justify-end">
            <button class="bg-[#16a34a] text-[#ffffff]  font-bold text-base p-3 rounded-lg hover:bg-[#15803d] active:scale-95 transition-transform transform">
              <font>
                <font>
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
                </font>
              </font>
            </button>
          </div>
        </div>
        <font className="mt-4 ">
            <font className="text-[#374151] text-sm/3">
              Disponible 2 días después de tu compra
            </font>
          </font>
      </div>
    </div>
  );
};

export default CardProduct;
