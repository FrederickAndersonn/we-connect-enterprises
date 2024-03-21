import React from 'react';
import lenteraNusantara from '../assets/lenteranusantara.png';

const PastPartners = () => {
    const partners = [
        { name: 'Lentera Nusantara', logo: lenteraNusantara },
    ];

    return (
        <div id="partners" className="flex flex-col items-center w-full h-auto p-20 ">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">Past Partners</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {partners.map((partner, index) => (
                    <div key={index} className="flex justify-center items-center max-w-xs max-h-xs">
                        <img src={partner.logo} alt={partner.name} className="w-[100px] md:w-[200px] object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PastPartners;