
import Image from 'next/image';
import { FormEvent } from 'react';
import PaymentMethodSelector from './PaymentSelector';

interface CheckoutModalProps {
    readonly isOpen: boolean;
    readonly onClose: () => void;
    readonly onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function CheckoutModal({ isOpen, onClose, onSubmit }: CheckoutModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-3 sm:px-0">
            <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Información de Pago y Dirección</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="font-medium text-gray-700">Nombre</label>
                        <input id="name" type="text" name="name" className="w-full border border-gray-100 rounded-md shadow-md" required />
                    </div>
                    <div>
                        <label htmlFor="address" className="font-medium text-gray-700">Dirección</label>
                        <input type="text" name="address" className="w-full border border-gray-100 rounded-md shadow-md" required />
                    </div>
                    <div>
                        <label htmlFor="city" className="font-medium text-gray-700">Ciudad</label>
                        <input id="city" type="text" name="city" className="w-full border border-gray-100 rounded-md shadow-md" required />
                    </div>
                    <div>
                        <label htmlFor="cardNumber" className="font-medium text-gray-700">Número de Tarjeta</label>
                        <input id="cardNumber" type="text" name="cardNumber" className="w-full border border-gray-100 rounded-md shadow-md" required />
                    </div>
                    <div>
                        {/* <div className='flex items-stretch w-full gap-4'>
                            <button className='bg-white p-3'>
                                <Image src={"/resources/images/logo-pse.webp"} alt='logo-pse' width={100} height={100}></Image>
                            </button>
                            <button className='bg-primary p-3'></button>
                        </div> */}
                        <PaymentMethodSelector />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button type="button" onClick={onClose} className="text-gray-600 hover:text-gray-900">
                            Cancelar
                        </button>
                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-hardprimary">
                            Confirmar Pago
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
