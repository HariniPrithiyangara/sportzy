// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
