interface MiniAdsProps {
    reverse?: boolean;
}


export const MiniAds = ({ reverse = false }: MiniAdsProps) => {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-[auto,1fr] gap4`}>
            <div className={`flex ${reverse ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 bg-primary w-1 h-auto "></div>
                <span className={`text-sm mx-4`}>
                    Repellendus veritatis id minima quibusdam nesciunt totam molestias necessitatibus ex obcaecati inventore accusamus ratione quam quia provident, esse qui ad aut sit!
                </span>
            </div>
            <div className={`flex items-center justify-center h-full ${reverse ? 'order-first' : ''}`}>
                <button className="bg-primary hover:bg-hardprimary text-white font-semibold py-2 px-4 rounded-md ">
                    Comprar ahora
                </button>
            </div>
        </div>
    )
}
