'use client'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosArrowUp } from 'react-icons/io';

import { IconType } from 'react-icons';
import { useEffect, useState } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';

interface ButtonSocialProps {
    classname: string;
    url: string;
    icon: IconType;
    newPage?: boolean;
}

const ButtonSocial = ({ classname, url, icon: Icon, newPage = false }: ButtonSocialProps) => (
    <a
        href={url}
        target={!newPage ? "_blank" : ""}
        rel="noopener noreferrer"
        className={`rounded-full p-5 m-1 text-white transition-colors duration-300 ease-in-out ${classname}`}
    >
        <Icon className="w-6 h-6" />
    </a>
);

const SocialButtons = () => {
    const [isAboveFooter, setIsAboveFooter] = useState(false);
    const [pxFooter, setPxFooter] = useState(0);
    const [link, setLink] = useState('');

    useEffect(() => {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
        setLink(isMobile
            ? "https://wa.me/573107287261?text=Hola,%20me%20puedes%20brindar%20información"
            : "https://web.whatsapp.com/send?phone=573107287261&text=Hola,%20me%20puedes%20brindar%20información");

        const handleScroll = () => {
            const footer = document.querySelector('#footer');
            const footerPosition = footer ? footer.getBoundingClientRect().top : 0;
            const windowHeight = window.innerHeight;

            // Si el footer está en la pantalla, ajusta la posición de los botones
            if (footerPosition <= windowHeight) { // umbral de 100px antes de alcanzarlo
                setPxFooter(windowHeight - footerPosition);
                setIsAboveFooter(true);
            } else {
                setIsAboveFooter(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed right-4 flex flex-col space-y-2 transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]`}
            style={{
                bottom: isAboveFooter ? pxFooter : '1rem'
            }}>
            <ButtonSocial classname="bg-green-500 text-white dark:bg-green-400 
                        hover:bg-green-600 dark:hover:bg-green-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                url={`${link}`} icon={AiOutlineWhatsApp} />
            {/* <ButtonSocial classname="bg-gray-800 hover:bg-gray-900" url="https://www.twitter.com" icon={FaXTwitter} />
            <ButtonSocial classname="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 hover:opacity-90" url="https://www.instagram.com" icon={FaInstagram} />
            <ButtonSocial classname="bg-gray-200 hover:bg-gray-300 text-gray-800" url="#home" newPage={true} icon={IoIosArrowUp} /> */}
        </div >
    );
};

export default SocialButtons;
