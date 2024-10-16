
interface ItemsSummaryProps {
    label: string;
    amount: number;
}

const ItemsSummary = ({ label, amount }: ItemsSummaryProps) => {
    return (
        <>
            <div className="flex justify-between items-center py-2">
                <span className="text-lg">{label}</span>
                <span className="text-lg font-bold">${amount}</span>
            </div>
        </>
    )

}
const items = [
    {
        label: "Subtotal",
        amount: 100
    },
    {
        label: "Envío Aproximado",
        amount: 10
    },
    {
        label: "Impuestos",
        amount: 10
    }
]

export const Summary = () => {
    const subtotal = 100
    const shippingCost = 10
    const tax = 10
    const total = subtotal + shippingCost + tax

    return (
        <div className="bg-softprimary shadow-lg rounded-lg p-6 m-4 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Resumen de Pedido</h2>
            <div className="divide-y divide-gray-200">
                {
                    items.map((item) => (
                        <ItemsSummary key={item.label} label={item.label} amount={item.amount} />
                    ))
                }
                <div className="flex justify-between items-center pt-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-xl font-bold">${total.toFixed(2)}</span>
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
