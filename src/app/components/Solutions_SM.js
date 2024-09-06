'use client'
import WebIcon from '@mui/icons-material/Web';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import CellTowerIcon from '@mui/icons-material/CellTower';
import CloudIcon from '@mui/icons-material/Cloud';
import InfoIcon from '@mui/icons-material/Info';
import ServiceBtn from "./ServiceBtn";
import { usePathname} from 'next/navigation'

const cardData = [
  {
    title: "Server and Storage Systems",
    text: "To provide great advantage by adding efficiency to business processes by solving problems with our Technology Services.",
    icon: <WebIcon style={{ fontSize: 48, color: '#f1f5f9' }} />,
    imageUrl: '/images/solutions/solution1.jpeg'
  },
  {
    title: "IT Support Services",
    text: "Our customers have the right to unlimited calls and on-site support within the scope of the agreement.",
    icon: <AdsClickIcon style={{ fontSize: 48, color: '#f1f5f9' }} />,
    imageUrl: '/images/solutions/solution2.jpeg'
  },
  {
    title: "Desktop and Server Virtualization",
    text: "Our server virtualization, workforce mobility platform enables end users to access their data and applications from any device.",
    icon: <ScreenSearchDesktopIcon style={{ fontSize: 48, color: '#f1f5f9' }} />,
    imageUrl: '/images/solutions/solution3.jpg'
  },
  {
    title: "Network and Security Solutions",
    text: "The security of IT infrastructures of institutions is an important subject of expertise and professional protection of data security.",
    icon: <CellTowerIcon style={{ fontSize: 48, color: '#f1f5f9' }} />,
    imageUrl: '/images/solutions/solution4.jpg'
  },
  {
    title: "Cloud Services",
    text: "A copy of our customers' Business Critical Systems is the provision of service in IT Cloud Cloud technologies.",
    icon: <CloudIcon style={{ fontSize: 48, color: '#f1f5f9' }} />,
    imageUrl: '/images/solutions/solution5.jpeg'
  },
  {
    title: "Tracing Solutions",
    text: "With our IT Cloud Monitoring service, we monitor the entire infrastructure of our customers by setting alarms.",
    icon: <InfoIcon style={{ fontSize: 48, color: '#f1f5f9' }} />,
    imageUrl: '/images/solutions/solution6.jpeg'
  },
];

export default function Solutions_SM() {
  const pathname = usePathname()
    return(
      <div className='h-auto w-full bg-blue-950'>
      <div className="grid grid-cols-1 place-items-center place-content-center ">
      <h1 data-aos="fade-down" className="text-white mt-5 font-extrabold text-2xl md:text-3xl">Our Services and Solutions</h1>
      <p data-aos="fade-down" className="text-white font-semibold text-lg md:text-2xl text-center">Your IT Infrastructure is Entrusted to Us</p>
      {pathname !== '/services' && (
        <div className='flex justify-center md:mt-5 mt-10 mb-0 md:mb-10'>
          <ServiceBtn>
            All Services
          </ServiceBtn>
        </div>
      )}
      </div>
        <div className="grid grid-cols-1 place-items-center place-content-center gap-4 p-6 ">
        {cardData.map((card, idx) => (
        <div key={idx} className="d-flex align-items-stretch " data-aos="fade-up">
<table className='table-auto hvr-rotate '>
    <tbody>
        <tr className='border-2 border-white '>
            <td>
            <div className='p-2 shadow-md text-white bg-transparent flex flex-col align-middle justify-center text-center  w-80 h-64 shadow-slate-500/40'>
        <div className='mb-3'>{card.icon}</div>
        <h1 className='font-bold mb-3'>{card.title}</h1>
        <p>{card.text}</p>
         </div>
            </td>
        </tr>
        <tr className='border-2 border-white'>
            <td>
         
            {pathname === '/services' ? (
                                <div className="bg-slate-900 flex items-center text-center justify-center w-80 h-64 p-10">
                                <h1 className='text-white'>{card.text}</h1>
                              </div>

              ) : (
            <div className="relative p-2 shadow-md text-white bg-cover flex flex-col w-80 h-64 shadow-slate-500/40 align-middle justify-center text-center">
                  <div
                    className="absolute inset-0 bg-cover opacity-20 z-0"
                    style={{ backgroundImage: `url(${card.imageUrl})` }}
                  ></div>
  <div className="relative z-10">
    <h1 className='text-white'>{card.text}</h1>
  </div>
</div>
              )}
            </td>
        </tr>
    </tbody>
</table>
        </div>
        ))}
        </div>
        </div>
    )
}