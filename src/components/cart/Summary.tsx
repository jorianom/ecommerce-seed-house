import { formattedNumber } from "@/src/utils/format";

interface ItemsSummaryProps {
    label: string;
    amount: number;
}

const ItemsSummary = ({ label, amount }: ItemsSummaryProps) => {

    return (
        <>
            <div className="flex justify-between items-center py-2">
                <span className="text-lg">{label}</span>
                <span className="text-lg font-bold">$ {formattedNumber(amount, 1)}</span>
            </div>
        </>
    )

}
interface SummaryProps {
    total: number;
}

export const Summary = ({ total }: SummaryProps) => {
    const shippingCost = 100
    const tax = total * 0.19
    total = total + shippingCost
    const subtotal = total - tax - shippingCost
    const items = [
        {
            label: "Subtotal",
            amount: subtotal
        },
        {
            label: "Impuestos",
            amount: tax
        },
        {
            label: "Envío Aproximado",
            amount: shippingCost
        }
    ]

    return (
        <div className="bg-softprimary shadow-lg rounded-lg p-6 mx-5 my-4 sm:my:0 w-full sm:w-5/6 flex-shrink-0">
            <h2 className="text-2xl font-bold mb-4">Resumen de Pedido</h2>
            <div className="divide-y divide-gray-200">
                {
                    items.map((item) => (
                        <ItemsSummary key={item.label} label={item.label} amount={item.amount} />
                    ))
                }
                <div className="flex justify-between items-center pt-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-xl font-bold">$ {formattedNumber(total, 1)}</span>
                </div>
            </div>
            <div className="mt-6 text-center">
                <button className="w-2/5 bg-primary hover:bg-hardprimary text-white font-semibold py-2 rounded-md">
                    Pagar
                </button>
            </div>
        </div>
    )
}
