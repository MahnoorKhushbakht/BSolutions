'use client'
import Paper from '@mui/material/Paper';
import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';

export default function Strengths() {
  const strength = [
    { 
      strength_icon: (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>

      
      ),
      name: 'Relaibility' ,
      desc:'We provide accurate, reliable and ethical services with our expert staff. We apply the fastest and most reliable methods for your brand.'
    },
    { 
      strength_icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
      </svg>      
      ),
      name: 'Loyalty',
      desc:'Our long-term work continues until the job is finished. We establish solid and long-term relationships with all the companies we work with.'
    },
    { 
      strength_icon: (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
</svg>
      ),
      name: 'Experience' ,
      desc:'Thanks to the experience we have gained over the years, the specialist provides service with the latest technology devices.'
    },
    { 
      strength_icon: (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>
      ),
      name: 'Support' ,
      desc:'We accelerate your business processes by providing professional support. We solve your problems and provide instant solutions.'
    },
  ];
  const [flippedState, setFlippedState] = useState(strength.map(() => false));

  const handleFlip = (idx) => {
    const newFlippedState = flippedState.map((isFlipped, i) => (i === idx ? !isFlipped : isFlipped));
    setFlippedState(newFlippedState);
  };
  return (
    <div className='w-full h-90 bg-blue-950  p-8'>
    <ul className='grid md:grid-cols-4 grid-cols-1 p-8 gap-10 justify-between'>
      {strength.map((strengthItem, idx) => {
        const delay = `${idx * 0.2}s`; 

        return (
          <li key={idx}>
              <ReactCardFlip flipSpeedFrontToBack='2' flipSpeedBackToFront='2' key={idx} isFlipped={flippedState[idx]} flipDirection="vertical">
            <div>
            <Paper 
              data-aos-delay={delay} data-aos="fade-up" 
              className='flex-col drop-shadow-sm md:w-48 md:h-64 w-full h-64 leading-relaxed text-center flex items-center justify-center p-2 bg-slate-900 text-gray-200' 
              elevation={3}
              onMouseEnter={() => handleFlip(idx)}
              onMouseLeave={() => handleFlip(idx)}
            >
              <div className='mb-3 font-semibold'>
                {strengthItem.strength_icon}
              </div>
              <div>
                {strengthItem.name}
              </div>
            </Paper>
            </div>
            <div>
            <Paper 
              data-wow-delay={delay} 
              className='wow animate__animated animate__bounceIn flex-col drop-shadow-sm md:w-48 md:h-64 w-full h-64 leading-relaxed text-center flex items-center justify-center p-2 bg-slate-900 text-gray-200' 
              elevation={3}
            >
              <div className='mb-3 font-semibold'>
                {strengthItem.name}
              </div>
              <div>
                {strengthItem.desc}
              </div>
            </Paper>
            </div>
            </ReactCardFlip>
          </li>
        );
      })}
    </ul>
    </div>
  );
}