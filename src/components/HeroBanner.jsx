import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import tshirtImg from '../assets/tshirt.png';
import bottleImg from '../assets/water-bottle.png';
import badmintonImg from '../assets/badminton.png';
import shoeImg from '../assets/shoes.png';

const categories = [
  { name: 'T-Shirt', src: tshirtImg },
  { name: 'Water Bottle', src: bottleImg },
  { name: 'Badminton', src: badmintonImg },
  { name: 'Shoe', src: shoeImg },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(i => (i + 1) % categories.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text */}
        <div className="md:w-1/2 max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            DISCOVER YOUR <br />
            <span className="text-black">SPORTY EDGE</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Get the best sports apparel with the best offer that you can afford.
            Available for worldwide shipping and free delivery order.
          </p>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition"
            onClick={() => navigate('/products')}
          >
            Shop Now
          </button>
        </div>

        {/* Right: Cross-Fading Carousel */}
        <div className="relative md:w-1/2 mt-8 md:mt-0 h-80 overflow-hidden">
          {categories.map((cat, i) => (
            <img
              key={cat.name}
              src={cat.src}
              alt={cat.name}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
