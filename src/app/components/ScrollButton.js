'use client'
import React, { useState,useEffect} from 'react';
import { Link } from 'react-scroll';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
  


    return (
        <div>
            {isVisible && (
                <div className='flex justify-center items-center rounded-full bg-white w-10 md:w-16 h-10 md:h-16 z-1000 fixed bottom-6 right-6 cursor-pointer transform transition hover:-translate-y-2 drop-shadow-md'> 
                <Link
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="scroll-to-top-button"
                    onClick={scrollToTop}
                >
                    <div className="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-10 font-bold text-blue-950 text-center  ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>
                </Link>
                </div>
             )} 
        </div>
    );
};

export default ScrollButton;
