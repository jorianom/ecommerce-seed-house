import Image from 'next/image';
import { useState } from 'react';
import { PiCreditCardThin } from 'react-icons/pi';

const PaymentMethodSelector = () => {
    const [selectedMethod, setSelectedMethod] = useState('');

    const paymentMethods = [
        { id: 'credit', label: 'Tarjeta Crédito/Débito', imageSrc: '/resources/images/logo-pse.webp', logo: <PiCreditCardThin className='h-16 w-16' /> },
        // { id: 'paypal', label: 'PayPal', imageSrc: '/resources/images/logo-pse.webp' },
        { id: 'pse', label: 'PSE', imageSrc: '/resources/images/logo-pse.webp' },
        { id: 'nequi', label: 'Nequi', imageSrc: '/resources/images/nequi.png' },
    ];

    const handleSelectMethod = (methodId: string) => {
        setSelectedMethod(methodId);
    };

    return (
        <div className="flex items-center justify-center gap-1 sm:gap-2 ">
            {paymentMethods.map((method) => (
                <button
                    key={method.id}
                    onClick={() => handleSelectMethod(method.id)}
                    className={`flex flex-col items-center border-2 rounded-lg p-2 cursor-pointer transition-all duration-300 
                        ${selectedMethod === method.id ? 'border-blue-600 bg-blue-100' : 'border-gray-300'}
                    `}
                // style={{ width: '100px' }} // Establece un ancho fijos
                >
                    {!method.logo ?
                        <div className="w-17 h-16">
                            <Image
                                src={method.imageSrc}
                                alt={method.label}
                                width={100}
                                height={100}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        : method.logo}
                    <span className="text-gray-800 font-medium text-center truncate w-full">
                        {method.label}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default PaymentMethodSelector;
