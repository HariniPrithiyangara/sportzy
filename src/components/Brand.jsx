import React from 'react';
import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';
import brand5 from '../assets/brand5.png';

const Brands = () => {
  const logos = [brand1, brand2, brand3, brand4, brand5];

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-6 text-gray-700">BRANDS</h2>
        <div className="flex justify-between items-center flex-wrap gap-6">
          {logos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Brand ${index + 1}`}
              className="h-12 object-contain opacity-50 hover:opacity-100 transition duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
