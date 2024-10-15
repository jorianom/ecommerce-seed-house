import Image from "next/image"
import { MiniAds } from "./MiniAds"

export const AdsCarousel = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div className={`row-span-2  relative min-h-[200px] md:min-h-[200px] flex items-center justify-center  overflow-hidden`}
            >
                <Image src={"/resources/images/frame.png"} objectFit="contain" alt="Imagen de semilla"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="rounded-md object-contain"
                ></Image>
            </div>
            <div className="bg-softprimary p-4 flex items-center justify-center rounded-md">
                <MiniAds />
            </div>

            <div className="bg-softprimary p-4 flex items-center justify-center rounded-md">

                <MiniAds reverse={true} />
            </div>
        </div>

    )
}
