'use client'
import Image from 'react-bootstrap/Image';
import '@/app/css/Gallery.css';
import AboutBtn from "./AboutBtn";
import { usePathname} from 'next/navigation'
export default function Professional_Services() {
  const pathname = usePathname()
  const service_qualities = [
    {
      service_icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 md:w-15 md:h-15 mr-2 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      service_heading: 'Corporate Consulting',
      service_paragraph: 'We create technological infrastructures that will accelerate your business processes.',
    },
    {
      service_icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 md:w-15 md:h-15 mr-2 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      ),
      service_heading: 'IT Service System',
      service_paragraph: 'It covers the technical service we provide within the scope of IT support and maintenance.',
    },
    {
      service_icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 md:w-15 md:h-15 mr-2 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      ),
      service_heading: 'Innovative Solutions',
      service_paragraph: 'We produce solutions by closely following the innovations in the field of informatics.',
    },
  ];

  return (
<div className='grid grid-cols-1 md:grid-cols-2 w-full min-h-screen bg-blue-950 place-items-center place-content-center'>
  <div data-aos="fade-up" className="relative md:mt-0 mt-5">
    <div className="relative md:w-96 w-64 h-64 md:h-96 ">
      <Image
        src="/images/technoloy-gear.png"
        alt="technology gear"
        className="rounded-full absolute rotating-image bg-transparent"
      />
      <Image
        src="/images/officeStaff.png"
        alt="office staff"
        className="rounded-full hvr-grow fade-up absolute bg-transparent"
      />
    </div>
  </div>
  <div className="grid grid-cols-1 p-5 md:ml-0 ml-1 md:mr-0 mr-1 h-auto">
                <h1 data-aos="fade-down" className="font-bold sm:text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-gray-800 text-2xl">
                    Professional IT Service
                </h1>
                <p data-aos="fade-down"  className="text-lg text-white">
                    With our reliable service understanding and professional staff, we aim to present the expectations and requirements to the enterprises in the fastest way with technical support service.
                </p>


              
                {service_qualities.map((service_qualities, index) => (
      <div key={index} data-aos-delay={`${index * 0.2}s`} data-aos="fade-down" className="flex md:flex-row flex-col items-center md:items-start mt-0 md:mt-5 w-full gap-2">
    <div className="flex justify-center md:justify-start mt-4 md:mt-0">
    {service_qualities.service_icon}
    </div>
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="sm:text-xl md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-gray-400 text-2xl">
        {service_qualities.service_heading}
        </h1>
        <p className="sm:text-lg md:text-base sm:text-center md:text-left text-white">
        {service_qualities.service_paragraph}
        </p>
    </div>

    </div>


               ))}
 
 {pathname !== '/about' && (
        <div className='flex justify-center md:mt-5 mt-10 mb-0 md:mb-10'>
          <AboutBtn>
            Get to know us
          </AboutBtn>
        </div>
      )}
</div>
</div>

  )}