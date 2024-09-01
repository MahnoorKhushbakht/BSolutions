import SocialNav from "./SocialNav";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 px-2 md:px-0">
      <div  data-aos="fade" className="grid md:grid-cols-4 grid-cols-1 gap-4 ml-4 mr-4 justify-items-center md:justify-items-start text-center md:text-left">
        <div  className="leading-relaxed sm:text-center md:text-left sm:mt-4 md:mt-0">
          <ul className="list-none">
            <div className="flex flex-row gap-2 justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <li>London,UK</li>
            </div>
            <div   className="flex flex-row gap-2 justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <li>+44 7706 666275</li>
            </div>
            <div   className="flex flex-row gap-2 justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <li>BTLSupport@beryltechltd.com</li>
            </div>
            <SocialNav />
          </ul>
        </div>
        <div   className="sm:text-center md:text-left">
          <ul className="md:list-disc list-none">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <li >Home</li>
            <li >About Us</li>
            <li >Services</li>
            <li >Contact</li>
          </ul>
        </div>
        <div className="sm:text-center md:text-left">
          <ul   className="md:list-disc list-none">
            <h2 className="text-lg font-semibold mb-2">Engineering Resource</h2>
            <li>Break Fix Engineers</li>
            <li>Server Engineers</li>
            <li>Network Engineers</li>
            <li>Wireless Engineers</li>
            <li>Desktop/Side Engineers</li>
          </ul>
        </div>
        <div   className="sm:text-center md:text-left">
          <ul className="md:list-disc list-none">
            <h2 className="text-lg font-semibold mb-2">Professional Services</h2>
            <li>IMAC</li>
            <li>Roll Out</li>
            <li>Relocation</li>
            <li>ITAD</li>
            <li>Reverse Logistics</li>
            <li>Depot Repair/Storage</li>
          </ul>
        </div>
      </div>
      <p   className="text-white text-center text-sm mt-4">
        © 2023 Beryl Technologies Ltd - All rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
