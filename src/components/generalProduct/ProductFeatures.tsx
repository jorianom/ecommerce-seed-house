import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function ProductFeatures() {
  return (
    <Disclosure as="div" className="w-full">
      <div className='flex'>
        <DisclosureButton className="w-full border-b pb-2 px-4 text-left font-bold">Descripcion del producto?</DisclosureButton>
      <ChevronDownIcon className="size-5 fill-black/60" />
      </div>
      <div className="overflow-hidden py-2">
        <DisclosurePanel
          transition
          className="px-4 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga quidem asperiores veniam maxime omnis adipisci corporis animi sapiente odit tempora dolor officiis nam nisi debitis ratione, sit mollitia cumque.
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}
