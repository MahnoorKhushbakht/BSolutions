import Solutions from "./components/Solutions";
import Expertise from "./components/Expertise";
import Service from "./components/Service";
import Slider from "./components/Slider";
import Records from "./components/Records";
import Professional_Services from "./components/Professional_Services";
import OurClient from "./components/OurClients";
import Solutions_SM from "./components/Solutions_SM";
import SpecialPacks from "./components/SpecialPacks";
import SpecialPacks_SM from "./components/SpecialPacks_SM";
import Reviews from "./components/Reviews";
import ScrollButton from "./components/ScrollButton";
import ServiceBtn from "./components/ServiceBtn";
export default function Home() {
  return (
    <main className="flex flex-col justify-center h-auto w-full bg-slate-900">
     <Slider/>
     <Service/>
     <div className="flex flex-row justify-between items-center p-8">
  <h1 className="text-2xl font-bold text-slate-200">
    We provide Best IT Solutions for Corporate and Personal persons.
  </h1>
<ServiceBtn>
View All Services
</ServiceBtn>
</div>
<div className="mt-10 mb-20 bg-blue-950 w-full h-full">
<Professional_Services/>
<Expertise/>
</div>
<div className="md:hidden"><Solutions_SM/></div>
<div className="hidden md:block"><Solutions/></div>
<div className="mt-10 bg-slate-900 md:bg-blue-950 w-full h-full">
<Records/>
<div className="md:hidden"><SpecialPacks_SM/></div>
<div className="hidden md:block mb-10"><SpecialPacks/></div>
</div>
<OurClient/>
<Reviews/>
<ScrollButton/>
    </main>
  );
}
