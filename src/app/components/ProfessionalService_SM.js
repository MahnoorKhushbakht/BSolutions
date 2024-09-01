import React from 'react';
import Image from 'react-bootstrap/Image';
import '@/app/css/Gallery.css';

export default function ProfessionalService_SM() {
    return (
<div className='grid grid-cols-1 md:grid-cols-2  w-full min-h-screen bg-slate-900 place-items-center place-content-center'>
  <div data-aos="zoom" className="relative md:mt-0 mt-5">
    <div className="relative md:w-96 w-64 h-64 md:h-96">
      <Image
        src="/images/technoloy-gear.png"
        alt="technology gear"
        className="rounded-full absolute rotating-image bg-transparent"
      />
      <Image
        src="/images/officeStaff.png"
        alt="office staff"
        className="rounded-full absolute bg-transparent"
      />
    </div>
  </div>
  <div className="grid grid-cols-1 p-5 md:ml-0 ml-1 md:mr-0 mr-1 h-auto">
  <h1 data-aos="fade-up"  className="font-bold sm:text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-slate-500 text-2xl">
                    Professional IT Service
                </h1>
                <p data-aos="fade-down"  className="text-lg">
                Beryl Technologies Ltd : futuristic solutions - an it company providing it solution and services for businesses throughout the world. We are focused on empowering the future of innovation by revolutionizing the industry through cutting edge advancements and groundbreaking solutions through team of dedicated it engineers across the globe.
                </p>
                <h1 data-aos="fade-up" className="font-bold sm:text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-slate-500 text-2xl">
                Mission Vision
                </h1>
                <p data-aos="fade-up" className="text-lg">
                Our vision is to be the catalyst for transformative change in the tech industry, driving innovation and creating a better future. We are committed to our mission of empowering businesses and individuals through cutting-edge technologies that enhance efficiency, productivity, and sustainability. By pushing boundaries and embracing challenges, we strive to unlock the full potential of technology in shaping a brighter tomorrow.
                </p>
</div>
</div>
    );
}


