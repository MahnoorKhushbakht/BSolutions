import React from 'react';
import Image from 'react-bootstrap/Image';
import '@/app/css/Gallery.css'

export default function ImageCollage() {
    return (
        <div data-aos='fade' className="relative">
            <Image
                src="/images/technoloy-gear.png"
                alt="office"
                className="rounded-full absolute rotating-image bg-transparent "
            />
            <Image
                src="/images/officeStaff.png"
                alt="office"
                className="rounded-full absolute  bg-transparent"
            />
        </div>
    );
}
