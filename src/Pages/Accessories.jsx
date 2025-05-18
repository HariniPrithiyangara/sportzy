import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../Pages/CartContext"; // Import cart hook

// Import your sports-related accessories images here
import cricketBatImg from "../assets/cricket-bat.png";
import cricketGlovesImg from "../assets/cricket-gloves.png";
import helmetImg from "../assets/helmet.png";
import sportsCapImg from "../assets/sports-cap.png";
import waterBottleImg from "../assets/water-bottles.png";
import wristBandImg from "../assets/wrist-band.png";
import gymBagImg from "../assets/gym-bag.png";
import sportsSocksImg from "../assets/sports-socks.png";

const accessoriesProducts = [
  {
    id: 1,
    name: "Cricket Bat",
    image: cricketBatImg,
    originalPrice: 7500,
    offerPrice: 6200,
    discount: 17,
  },
  {
    id: 2,
    name: "Cricket Gloves",
    image: cricketGlovesImg,
    originalPrice: 2500,
    offerPrice: 1900,
    discount: 24,
  },
  {
    id: 3,
    name: "Sports Helmet",
    image: helmetImg,
    originalPrice: 3200,
    offerPrice: 2700,
    discount: 16,
  },
  {
    id: 4,
    name: "Sports Cap",
    image: sportsCapImg,
    originalPrice: 800,
    offerPrice: 650,
    discount: 19,
  },
  {
    id: 5,
    name: "Water Bottle",
    image: waterBottleImg,
    originalPrice: 1200,
    offerPrice: 900,
    discount: 25,
  },
  {
    id: 6,
    name: "Wrist Band",
    image: wristBandImg,
    originalPrice: 600,
    offerPrice: 450,
    discount: 25,
  },
  {
    id: 7,
    name: "Gym Bag",
    image: gymBagImg,
    originalPrice: 3500,
    offerPrice: 2900,
    discount: 17,
  },
  {
    id: 8,
    name: "Sports Socks",
    image: sportsSocksImg,
    originalPrice: 400,
    offerPrice: 320,
    discount: 20,
  },
];

export default function Accessories() {
  const { addToCart } = useCart(); // Get addToCart from context

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6 flex gap-6">
        {/* Sidebar Filters */}
        <aside className="w-1/4 bg-gray-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Filters</h2>

          {/* Color Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-700">Color</h3>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Black
            </label>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              White
            </label>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Blue
            </label>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-700">Price</h3>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Below ₹1000
            </label>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              ₹1000 - ₹3000
            </label>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Above ₹3000
            </label>
          </div>
        </aside>

        {/* Products Grid */}
        <section className="flex-1">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Sports Accessories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {accessoriesProducts.map(({ id, name, image, originalPrice, offerPrice, discount }) => (
              <div
                key={id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer bg-white"
              >
                <img src={image} alt={name} className="w-full h-48 object-cover" />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{name}</h3>

                  <div className="mb-4">
                    <p className="text-gray-500 line-through text-sm">₹{originalPrice}</p>
                    <p className="text-gray-900 font-bold text-lg">
                      ₹{offerPrice}{" "}
                      <span className="text-red-600 text-sm font-medium">
                        Save {discount}%
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={() => addToCart({ id, name, image, originalPrice, offerPrice, discount })}
                    className="w-full bg-black text-white py-2 rounded hover:bg-red-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
