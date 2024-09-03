import Breadcrumbs from "../components/BreadCrumb";
import Contact from "../components/Contact";
import OurMap from "../components/OurMap";

export default function ContactUs(){
    return(
      <div className="h-auto w-full bg-slate-900">
       <div className="w-full h-[90vh] bg-[url('/images/page-header.jpg')] bg-cover bg-center grid place-items-center place-content-center">
        <h1 data-aos="fade-down"  className="font-bold md:text-5xl text-3xl mb-3 text-center">Contact Us</h1>
        <div className="flex justify-center">
<Breadcrumbs/>
      </div>
      </div>
      <Contact/>
      <OurMap/>
      </div>
    )
}