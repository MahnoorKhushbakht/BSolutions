'use client'
import { useState } from 'react';
import { Customer_Centric_Approach, Sustainable_Innovation, Strategic_Partnership, Innovation } from "./Expertise_Details";
import Expertise_SM from './Expertise_SM';

export default function Expertise() {
    const [selectedItem, setSelectedItem] = useState('Innovation');

    const renderContent = () => {
        switch (selectedItem) {
            case 'Innovation':
                return <Innovation />;
            case 'Strategic_Partnership':
                return <Strategic_Partnership />;
            case 'Sustainable_Innovation':
                return <Sustainable_Innovation />;
            case 'Customer_Centric_Approach':
                return <Customer_Centric_Approach />;
            default:
                return null;
        }
    };

    return (
        <>
            <div data-aos='fade-down' className='hidden md:block  h-full bg-blue-950'>
                <div className="bg-blue-950 grid grid-cols-[auto_1fr] mt-5 mb-5 p-3">
                    <table className="w-64 ">
                        <tbody>
                            <tr 
                                className={`hover:bg-slate-900 hover:text-white cursor-pointer ${selectedItem === 'Innovation' ? 'bg-slate-900 text-white' : ''}`} 
                                onClick={() => setSelectedItem('Innovation')}
                            >
                                <td className="p-2 flex items-center">
                                    Innovation
                                </td>
                            </tr>
                            <tr 
                                className={`hover:bg-slate-900 hover:text-white cursor-pointer ${selectedItem === 'Strategic_Partnership' ? 'bg-slate-900 text-white' : ''}`} 
                                onClick={() => setSelectedItem('Strategic_Partnership')}
                            >
                                <td className="p-2">Strategic Partnerships</td>
                            </tr>
                            <tr 
                                className={`hover:bg-slate-900 hover:text-white cursor-pointer ${selectedItem === 'Sustainable_Innovation' ? 'bg-slate-900 text-white' : ''}`} 
                                onClick={() => setSelectedItem('Sustainable_Innovation')}
                            >
                                <td className="p-2">Sustainable Innovation</td>
                            </tr>
                            <tr 
                                className={`hover:bg-slate-900 hover:text-white cursor-pointer ${selectedItem === 'Customer_Centric_Approach' ? 'bg-slate-900 text-white' : ''}`} 
                                onClick={() => setSelectedItem('Customer_Centric_Approach')}
                            >
                                <td className="p-2">Customer-Centric Approach</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex-grow bg-slate-900 ">
                        {renderContent()}
                    </div>
                </div>
            </div>
            <div data-aos='fade-down' className="md:hidden bg-slate-900">
                <Expertise_SM />
            </div>
        </>
    );
}
