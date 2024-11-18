'use client';
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
        className={`rounded-full p-4 sm:p-5 m-1 text-white transition-colors duration-300 ease-in-out ${classname}`}
    >
        <Icon className="w-6 h-6" />
    </a>
);

const SocialButtons = () => {
    const [isAboveFooter, setIsAboveFooter] = useState(false);
    const [pxFooter, setPxFooter] = useState(0);
    const [link, setLink] = useState('');
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
    useEffect(() => {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
        setLink(isMobile
            ? "https://wa.me/573107287261?text=Hola,%20me%20puedes%20brindar%20información"
            : "https://web.whatsapp.com/send?phone=573107287261&text=Hola,%20me%20puedes%20brindar%20información");
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        }
    }, []);

    return (
        <div className={`fixed right-4 flex flex-col space-y-2 transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] bottom-1`}
            style={{
                bottom: isAboveFooter ? pxFooter : '1rem'
            }}>
            <ButtonSocial classname="bg-green-500 text-white dark:bg-green-400 
                        hover:bg-green-600 dark:hover:bg-green-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                url={`${link}`} icon={AiOutlineWhatsApp} />
        </div >
    );
};

export default SocialButtons;
