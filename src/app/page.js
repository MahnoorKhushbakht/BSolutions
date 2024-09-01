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

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-auto w-full bg-slate-900">
     <Slider/>
     <Service/>
     <div className="flex flex-row justify-between items-center p-8">
  <h1 className="text-2xl font-bold text-slate-200">
    We provide Best IT Solutions for Corporate and Personal persons.
  </h1>
  <div className="w-auto h-auto border-1 border-gray-300 shadow-lg transition transform hover:-translate-y-1 bg-transparent p-3 text-gray-300 cursor-pointer">
    Learn more about services <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

  </div>
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
    </main>
  );
}
