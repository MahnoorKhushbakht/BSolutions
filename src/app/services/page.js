import Solutions from "../components/Solutions";
import Solutions_SM from "../components/Solutions_SM";
import Breadcrumbs from "../components/BreadCrumb";
import OurClient from "../components/OurClients";
import Reviews from "../components/Reviews";
export default function Services(){
    return(
        <div className="h-auto w-full ">
        <div className="w-full  h-80 md:h-[90vh] bg-[url('/images/page-header.jpg')] bg-cover bg-center grid place-items-center place-content-center">
        <h1 data-aos="fade-down" data-aos-duration="600" className="font-bold md:text-5xl text-white text-3xl mb-3 text-center">Services</h1>
        <div className="flex justify-center">
        <Breadcrumbs/>
      </div>
      </div>
      <div className="md:hidden"><Solutions_SM/></div>
<div className="hidden md:block mt-5"><Solutions/></div>
<Reviews/>
<OurClient/>
      </div>
    )
}