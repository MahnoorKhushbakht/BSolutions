import Solutions from "../components/Solutions";
import Solutions_SM from "../components/Solutions_SM";
import Breadcrumbs from "../components/BreadCrumb";
import OurClient from "../components/OurClients";
import Reviews from "../components/Reviews";
export default function Services(){
    return(
        <div className="min-w-svw min-h-svh bg-blue-950">
        <div className="w-full al h-80 bg-[url('/images/network_bg.jpg')] bg-cover bg-center grid place-content-center">
        <h1 data-aos="fade-down" data-aos-duration="600" className="font-bold md:text-5xl text-3xl mb-3 text-center">Services</h1>
        <div className="flex justify-center">
        <Breadcrumbs/>
      </div>
      </div>
      <div className="md:hidden"><Solutions_SM/></div>
<div className="hidden md:block"><Solutions/></div>
<OurClient/>
<Reviews/>
      </div>
    )
}