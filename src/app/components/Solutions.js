'use client';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import WebIcon from '@mui/icons-material/Web';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import CellTowerIcon from '@mui/icons-material/CellTower';
import SolutionLayout from './SolutionLayout';
import CloudIcon from '@mui/icons-material/Cloud';
import InfoIcon from '@mui/icons-material/Info';
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

function Solutions() {
  const pathname = usePathname()
  const [flippedState, setFlippedState] = useState(cardData.map(() => false));

  const handleFlip = (idx) => {
    const newFlippedState = flippedState.map((isFlipped, i) => (i === idx ? !isFlipped : isFlipped));
    setFlippedState(newFlippedState);
  };

  return (
    <SolutionLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center place-content-center gap-4 p-6 mb-5">
        {cardData.map((card, idx) => (
          <div key={idx} className="d-flex align-items-stretch" data-aos="fade-up">
            <ReactCardFlip
              flipSpeedFrontToBack={2}
              flipSpeedBackToFront={2}
              isFlipped={flippedState[idx]}
              flipDirection="horizontal"
            >
              <div
                onMouseEnter={() => handleFlip(idx)}
                onMouseLeave={() => handleFlip(idx)}
                className="p-6 shadow-xl text-white bg-blue-950 flex flex-col align-middle justify-center text-center w-96 h-64"
              >
                <div className="mb-3">{card.icon}</div>
                <h1 className="font-bold mb-3">{card.title}</h1>
                <p>{card.text}</p>
              </div>

              {pathname === '/services' ? (
                <div className="bg-slate-900 flex items-center text-center justify-center w-96 h-64 p-10">
                  <h1>{card.text}</h1>
                </div>
              ) : (
                <div className="relative p-6 shadow-md text-white bg-cover flex flex-col w-96 h-64 align-middle justify-center text-center">
                  <div
                    className="absolute inset-0 bg-cover opacity-20 z-0"
                    style={{ backgroundImage: `url(${card.imageUrl})` }}
                  ></div>
                  <div className="relative z-10">
                    <h1>{card.text}</h1>
                  </div>
                </div>
              )}
            </ReactCardFlip>
          </div>
        ))}
      </div>
    </SolutionLayout>
  );
}

export default Solutions;
