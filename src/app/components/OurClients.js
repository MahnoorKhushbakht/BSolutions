import Image from 'react-bootstrap/Image';
export default function OurClient(){
    const clients = [
        { 
          client_logo:"/images/clients/client1.png",
        },
        { 
            client_logo:"/images/clients/client2.png",
          },
          { 
            client_logo:"/images/clients/client3.png",
          },
          { 
           client_logo:"/images/clients/client4.png",
          },
          { 
           client_logo:"/images/clients/client5.png",
          },
          { 
           client_logo:"/images/clients/client6.png",
          },
          { 
           client_logo:"/images/clients/client7.png",
          },
          { 
           client_logo:"/images/clients/client8.png",
          },
          { 
            client_logo:"/images/clients/client9.png",
           },
           { 
            client_logo:"/images/clients/client10.png",
           },
        ]
    return(
        <div className='min-h-screen w-full bg-blue-950 md:bg-slate-900'>
            <div className="grid grid-cols-1 place-items-center place-content-center ">
            <div className='w-24 h-24 md:mt-0 mt-5 md:bg-blue-950 bg-slate-900 flex justify-center items-center'>
                <svg data-aos="fade-down" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-20 text-slate-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>
                </div>
                <h1 data-aos="fade-down" className="font-extrabold text-xl md:text-2xl text-center mt-2 text-white">Our Customers Who Make Us</h1>
                <p data-aos="fade-down" className="font-semibold text-base md:text-lg text-center text-white">We work day and night for our customers and speed up their business processes.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 place-items-center place-content-center gap-2 sm:gap-4 p-6 ">
                {clients.map((clients, index) => (
                    <div data-aos-delay={`${index * 0.2}s`} data-aos="fade-down" className="w-28 h-28 sm:w-32 sm:h-32 hvr-pulse bg-slate-900 md:bg-blue-950 border border-slate-500 hvr-float" key={index}>
                        <Image
                            src={clients.client_logo}
                            alt='our clients'
                            className="w-full h-full p-2 object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
