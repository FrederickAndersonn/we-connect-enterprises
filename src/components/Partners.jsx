import React from 'react';

const PastPartners = () => {
    const partners = ['Company A', 'Company B', 'Company C', 'Company D']; // Replace with your actual data

    return (
        <div id="partners" className="flex flex-col items-center w-full h-screen p-20">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white mb-20">Past Partners</h1>
            <ul className="w-3/4 text-center">
                {partners.map((partner, index) => (
                    <li key={index} className="mb-2">{partner}</li>
                ))}
            </ul>
        </div>
    );
};

export default PastPartners;