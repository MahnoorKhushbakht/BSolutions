'use client'
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

export default function Reviews() {
    const reviewData = [
        {
            imgUrl: '/images/testimonial1.png',
            review: 'We all show you real-life examples of positive customer reviews. These review examples not only laud excellent customer experiences but are powerful tools.',
            testimonial: 'Peter'
        },
        {
            imgUrl: '/images/testimonial2.png',
            review: 'We all show you real-life examples of positive customer reviews. Oh, it\'s good.',
            testimonial: 'Maha'
        },
        {
            imgUrl: '/images/testimonial3.png',
            review: 'La la la',
            testimonial: 'Thomas'
        },
        {
            imgUrl: '/images/testimonial4.png',
            review: 'Wah waoo waoo',
            testimonial: 'Elles'
        },
    ];

    return (
        <div className="min-h-full p-4 w-full flex flex-col items-center justify-center md:bg-blue-950 bg-slate-900">
            <div className="grid grid-cols-1 place-items-center place-content-center mt-5">
                <div className='w-24 h-24 md:bg-slate-900 bg-blue-950 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-16 w-16 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                </div>
                <h1 data-aos="fade-down" className="font-extrabold text-xl md:text-2xl text-center">What Are Our Customers Saying?</h1>
                <p data-aos="fade-down" className="font-semibold text-base md:text-lg text-center w-64">Every customer is valuable to us. Here are the reviews of some of our customers who chose us.</p>
            </div>
            <div className="w-full max-w-3xl mt-10 mb-10">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviewData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center justify-center gap-6">
                                <div className="relative p-4 text-white bg-cover flex flex-col w-64 h-48 items-center justify-center text-center">
                                    <div className="absolute inset-0 bg-[url('/images/Quotation_Marks.png')] bg-cover opacity-5 z-0"></div>
                                    <div className="relative z-10">
                                        <h1 className="italic">{item.review}</h1>
                                        <h1 className="mt-4 font-semibold">{item.testimonial}</h1>
                                    </div>
                                </div>
                                <Image
                                    src={item.imgUrl}
                                    alt={`${item.testimonial}'s Testimonial`}
                                    className="rounded-full w-24 h-24 bg-transparent"
                                    width={96}
                                    height={96}
                                    layout="fixed"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
