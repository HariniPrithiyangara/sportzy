import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../Pages/CartContext"; // 🔥 Import Cart Context

import runningShoesImg from "../assets/women-running-shoe.png";
import jacketImg from "../assets/women-jacket.png";
import handbagImg from "../assets/handbag.png";
import yogaMatImg from "../assets/yoga-mat.png";
import sportsBraImg from "../assets/sports-bra.png";
import leggingsImg from "../assets/leggings.png";
import capImg from "../assets/cap.png";
import socksImg from "../assets/women-socks.png";

// Product data
const womenProducts = [
  {
    id: 1,
    name: "Women's Running Shoes",
    image: runningShoesImg,
    originalPrice: 4299,
    offerPrice: 2399,
    discount: 44,
  },
  {
    id: 2,
    name: "Lightweight Jacket",
    image: jacketImg,
    originalPrice: 3499,
    offerPrice: 2799,
    discount: 20,
  },
  {
    id: 3,
    name: "Stylish Handbag",
    image: handbagImg,
    originalPrice: 1999,
    offerPrice: 1599,
    discount: 20,
  },
  {
    id: 4,
    name: "Yoga Mat",
    image: yogaMatImg,
    originalPrice: 999,
    offerPrice: 699,
    discount: 30,
  },
  {
    id: 5,
    name: "Sports Bra",
    image: sportsBraImg,
    originalPrice: 1499,
    offerPrice: 999,
    discount: 33,
  },
  {
    id: 6,
    name: "High-Waist Leggings",
    image: leggingsImg,
    originalPrice: 1999,
    offerPrice: 1499,
    discount: 25,
  },
  {
    id: 7,
    name: "Baseball Cap",
    image: capImg,
    originalPrice: 499,
    offerPrice: 349,
    discount: 30,
  },
  {
    id: 8,
    name: "Comfort Socks",
    image: socksImg,
    originalPrice: 399,
    offerPrice: 299,
    discount: 25,
  },
];

export default function Women() {
  const { addToCart } = useCart(); // 🔥 Hook from CartContext

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6 flex gap-6">
        {/* Sidebar Filters */}
        <aside className="w-1/4 bg-gray-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Filters</h2>

          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-700">Color</h3>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Black
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              White
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Pink
            </label>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-700">Gender</h3>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Women
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Unisex
            </label>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-700">Price</h3>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Below ₹1000
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              ₹1000 - ₹3000
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Above ₹3000
            </label>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Women's Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {womenProducts.map(
              ({ id, name, image, originalPrice, offerPrice, discount }) => (
                <div
                  key={id}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer bg-white"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {name}
                    </h3>

                    <div className="mb-4">
                      <p className="text-gray-500 line-through text-sm">
                        ₹{originalPrice}
                      </p>
                      <p className="text-gray-900 font-bold text-lg">
                        ₹{offerPrice}{" "}
                        <span className="text-red-600 text-sm font-medium">
                          Save {discount}%
                        </span>
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        addToCart({
                          id,
                          name,
                          image,
                          price: offerPrice,
                        })
                      }
                      className="w-full bg-black text-white py-2 rounded hover:bg-red-600 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
