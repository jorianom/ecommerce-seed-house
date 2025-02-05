
export default function PaymentMethods() {
    return (
        <div className="mt-8 w-full rounded-2xl aspect-video border-[1px] p-6">
            <h1 className="rounded-2xl text-2xl font-thin h-12">Medios de pago</h1>
            <div className="grid grid-rows-3 grid-flow-col gap-3 text-wrap truncate h-80">
                <div>
                    <h1>Tarjeta de Crédito</h1>
                    <h1 className="font-text-sm text-[#374151]">¡Paga hasta en 48 cuotas!</h1>
                    <div class="flex flex-row justify-start gap-16">
                        <div class=""><img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="visa"/></div>
                        <div class=""><img src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="mastercard"/></div>
                        <div class=""><img src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" alt="america express"/></div>
                        <div class=""><img src="https://http2.mlstatic.com/storage/logos-api-admin/f1fc5b20-f39b-11eb-a186-1134488bf456-m.svg" alt="codensa"/></div>
                    </div>
                </div>
                <div>
                    <h1>Tarjeta de Débito</h1>
                    <div class="flex flex-row justify-start gap-16">
                        <div class=""><img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="visa" /></div>
                        <div class=""><img src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" alt="mastercard debito" /></div>
                    </div>
                </div>
                <div>
                    <h1>Otros medios de pago</h1>
                    <div class="flex flex-row justify-start gap-16">
                        <div class=""><img src="https://http2.mlstatic.com/storage/logos-api-admin/e5ee1d00-f39b-11eb-8e0d-6f4af49bf82e-m.svg" alt="efecty" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}