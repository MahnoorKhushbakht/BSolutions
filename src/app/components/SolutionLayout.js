import ServiceBtn from "./ServiceBtn";
export default function SolutionLayout({children}) {
    const urlPath = window.location.pathname;
    return(
        <div className='h-auto w-full bg-slate-900'>
        <div className="grid grid-cols-1 place-items-center place-content-center ">
        <h1 data-aos="fade-down" className="text-white font-extrabold text-2xl md:text-3xl">Our Services and Solutions</h1>
        <p data-aos="fade-down" className="text-white font-semibold text-lg md:text-2xl text-center">Your IT Infrastructure is Entrusted to Us</p>
        {urlPath === '/services' ? '':
    (<div className='flex justify-center md:mt-5 mt-10 mb-0 md:mb-10'>
        <ServiceBtn>
         All Services
        </ServiceBtn>
    </div>)}
        </div>
        {children}
        </div>
    )}