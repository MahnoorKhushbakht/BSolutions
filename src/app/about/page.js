import Breadcrumbs from "../components/BreadCrumb";
import ProfessionalService_SM from "../components/ProfessionalService_SM";
import Records from "../components/Records";
import Strengths from "../components/Strengths";

export default function About() {
  return (
    <div className="min-w-svw min-h-svh bg-slate-900">
      <div className="w-full h-svh bg-slate-900 bg-[url('/images/page-header.jpg')] bg-cover bg-center grid place-items-center place-content-center">
        <h1 data-aos="fade-down" data-aos-duration="600" className="font-bold md:text-5xl text-3xl mb-3 text-center text-white">
          About Us
        </h1>
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>
      </div>
      <ProfessionalService_SM />
      <div className="grid md:grid-cols-2 grid-cols-1 p-10 gap-2 bg-blue-950">
        <div>
          <h1
            data-aos="fade-down"
            data-aos-duration="600"
            className="font-bold sm:text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500 text-2xl"
          >
            Why Us
          </h1>
          <p
            data-aos="flip-down"
            data-aos-duration="600"
            className="text-base text-white"
          >
            We are at the forefront of technological advancements with a strong
            focus on our diverse portfolio, including state-of-the-art products
            and services designed to empower businesses and individuals. Through
            strategic partnerships and a forward-thinking approach, we aim to
            shape the future of innovation. We are constantly improving our
            efforts to maintain a high standard of quality in all aspects.
          </p>
        </div>
        <div>
          <h1
            data-aos="fade-down"
            data-aos-duration="600"
            className="font-bold sm:text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500 text-2xl"
          >
            Key Focus Areas
          </h1>
          <p
            data-aos="flip-down"
            data-aos-duration="600"
            className="text-base text-white"
          >
            At Beryl Technologies Ltd, our key focus areas include IT support
            services, desktop and servers, cloud services, network, and security
            solutions. By harnessing the power of our dedicated team, we enable
            businesses to streamline operations, optimize decision-making, and
            unlock new opportunities for growth. Our expertise in these areas
            positions us as a trusted partner in digital transformation.
          </p>
        </div>
      </div>
      <Records />
      <Strengths />
    </div>
  );
}
