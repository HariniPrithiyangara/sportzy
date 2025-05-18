import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../Pages/CartContext"; // Import cart hook

// Reuse featured product images
import nikeShoe from '../assets/nike-shoe.jpg';
import adidasShirt from '../assets/adidas-shirt.jpg';
import pumaFootball from '../assets/puma-football.jpg';
import reebokShorts from '../assets/reebok-shorts.jpg';
import uaHoodie from '../assets/ua-hoodie.jpg';
import filaBra from '../assets/fila-bra.jpg';
import asicsShoe from '../assets/asics-shoe.jpg';
import nbJoggers from '../assets/nb-joggers.jpg';

const products = [
  { id: 1, name: "Nike Air Zoom", price: 4999, image: nikeShoe },
  { id: 2, name: "Adidas Training Tee", price: 1299, image: adidasShirt },
  { id: 3, name: "Puma Football", price: 999, image: pumaFootball },
  { id: 4, name: "Reebok Gym Shorts", price: 799, image: reebokShorts },
  { id: 5, name: "Under Armour Hoodie", price: 2499, image: uaHoodie },
  { id: 6, name: "Fila Sports Bra", price: 1199, image: filaBra },
  { id: 7, name: "Asics Running Shoes", price: 5299, image: asicsShoe },
  { id: 8, name: "New Balance Joggers", price: 2099, image: nbJoggers },
];

// Filter options example
const filterOptions = {
  COLOR: ["Red", "Blue", "Green", "Black", "White"],
  GENDER: ["Men", "Women", "Unisex"],
  PRICE: ["Under ₹1000", "₹1000 - ₹3000", "Above ₹3000"],
  SIZE: ["S", "M", "L", "XL"],
  CATEGORY: ["Shoes", "Shirts", "Shorts", "Hoodies", "Bras", "Joggers"],
  AVAILABILITY: ["In Stock", "Out of Stock"]
};

export default function Product() {
  const { addToCart } = useCart();

  // Track which filter dropdown is open
  const [openFilter, setOpenFilter] = useState(null);

  const toggleFilter = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">NEW ARRIVALS</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Side Filter Panel */}
          <aside className="md:col-span-1 space-y-6 border-r pr-4 text-sm text-gray-800">
            {Object.keys(filterOptions).map((filter) => (
              <div key={filter}>
                <div
                  className="flex justify-between items-center cursor-pointer hover:underline"
                  onClick={() => toggleFilter(filter)}
                >
                  <span>{filter}</span>
                  <span className="text-xl">{openFilter === filter ? "⌃" : "⌄"}</span>
                </div>

                {/* Dropdown options */}
                {openFilter === filter && (
                  <ul className="mt-2 ml-2 space-y-1">
                    {filterOptions[filter].map((option) => (
                      <li key={option}>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" className="form-checkbox" />
                          <span>{option}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                )}

                <hr className="mt-2 border-gray-300" />
              </div>
            ))}
          </aside>

          {/* Right Side Products Grid */}
          <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-100 p-4 rounded-lg text-center shadow hover:shadow-lg transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover rounded mb-4"
                />
                <h3 className="text-md font-medium">{product.name}</h3>
                <p className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-red-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
