'use client';
import Image from "next/image";
import { useState, Fragment } from 'react';
import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface PdfViewerProps {
  fileUrl: string;
  imageUrl: string;
  alt: string;
  titleProduct: string;
}

export const PdfViewer = ({ fileUrl, imageUrl, alt, titleProduct }: PdfViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        className="flex flex-col w-full bg-white shadow-md rounded-2xl dark:text-black max-h-80 sm:max-h-fit cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        onClick={openModal}
      >
        <div className="aspect-square w-full rounded-2xl lg:aspect-none group-hover:opacity-75 relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={alt}
            className="rounded-t-2xl w-full object-cover p-1"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="flex-col p-4">
          <div className="text-sm/loose h-14 text-wrap truncate">
            <span className="text-clip">
              {titleProduct}
            </span>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                  <button
                    type="button"
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Cerrar</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <h3
                    className="text-lg font-medium leading-6 text-gray-900 mb-4"
                  >
                    {titleProduct}
                  </h3>

                  <div className="mt-2">
                    <iframe
                      src={fileUrl}
                      className="w-full h-[600px] rounded-2xl shadow-md border border-gray-200"
                      style={{ overflow: "auto" }}
                      title="Visor PDF"
                    ></iframe>
                  </div>
                </div>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
