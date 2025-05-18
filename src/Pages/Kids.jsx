import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../Pages/CartContext"; // Import cart hook

// Import images
import kidsShoesImg from "../assets/kids-shoe.png";
import kidsTshirtImg from "../assets/kids-tshirt.png";
import kidsCapImg from "../assets/kids-cap.png";
import kidsShortsImg from "../assets/kids-shorts.png";
import kidsJacketImg from "../assets/kids-jacket.png";
import kidsSocksImg from "../assets/kids-socks.png";
import kidsBackpackImg from "../assets/kids-backpack.png";
import kidsBallImg from "../assets/kids-ball.png";

// Kids products data
const kidsProducts = [
  {
    id: 1,
    name: "Kids Running Shoes",
    image: kidsShoesImg,
    originalPrice: 2799,
    offerPrice: 1999,
    discount: 29,
  },
  {
    id: 2,
    name: "Kids T-shirt",
    image: kidsTshirtImg,
    originalPrice: 999,
    offerPrice: 699,
    discount: 30,
  },
  {
    id: 3,
    name: "Kids Cap",
    image: kidsCapImg,
    originalPrice: 499,
    offerPrice: 349,
    discount: 30,
  },
  {
    id: 4,
    name: "Kids Shorts",
    image: kidsShortsImg,
    originalPrice: 899,
    offerPrice: 599,
    discount: 33,
  },
  {
    id: 5,
    name: "Kids Jacket",
    image: kidsJacketImg,
    originalPrice: 2199,
    offerPrice: 1599,
    discount: 27,
  },
  {
    id: 6,
    name: "Kids Socks",
    image: kidsSocksImg,
    originalPrice: 299,
    offerPrice: 199,
    discount: 33,
  },
  {
    id: 7,
    name: "Kids Backpack",
    image: kidsBackpackImg,
    originalPrice: 1299,
    offerPrice: 999,
    discount: 23,
  },
  {
    id: 8,
    name: "Kids Football",
    image: kidsBallImg,
    originalPrice: 799,
    offerPrice: 599,
    discount: 25,
  },
];

export default function Kids() {
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
              Blue
            </label>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Red
            </label>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Green
            </label>
          </div>

          {/* Gender Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-700">Gender</h3>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Boys
            </label>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Girls
            </label>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-700">Price</h3>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Below ₹500
            </label>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              ₹500 - ₹1500
            </label>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Above ₹1500
            </label>
          </div>
        </aside>

        {/* Products Grid */}
        <section className="flex-1">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Kids Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {kidsProducts.map(({ id, name, image, originalPrice, offerPrice, discount }) => (
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
                    onClick={() =>
                      addToCart({ id, name, image, originalPrice, offerPrice, discount })
                    }
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
