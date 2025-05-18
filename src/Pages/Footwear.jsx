import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../Pages/CartContext"; // Import cart hook

// Import your footwear images
import runningShoesImg from "../assets/running-shoes.png";
import basketballShoesImg from "../assets/basketball-shoes.png";
import footballCleatsImg from "../assets/football-cleats.png";
import tennisShoesImg from "../assets/tennis-shoes.png";
import hikingBootsImg from "../assets/hiking-boots.png";
import trainingShoesImg from "../assets/training-shoes.png";
import casualSneakersImg from "../assets/casual-sneakers.png";
import skateShoesImg from "../assets/skate-shoes.png";

// Product data
const footwearProducts = [
  {
    id: 1,
    name: "Running Shoes",
    image: runningShoesImg,
    originalPrice: 5500,
    offerPrice: 4600,
    discount: 16,
  },
  {
    id: 2,
    name: "Basketball Shoes",
    image: basketballShoesImg,
    originalPrice: 6200,
    offerPrice: 5200,
    discount: 16,
  },
  {
    id: 3,
    name: "Football Cleats",
    image: footballCleatsImg,
    originalPrice: 7000,
    offerPrice: 5950,
    discount: 15,
  },
  {
    id: 4,
    name: "Tennis Shoes",
    image: tennisShoesImg,
    originalPrice: 4800,
    offerPrice: 4000,
    discount: 17,
  },
  {
    id: 5,
    name: "Hiking Boots",
    image: hikingBootsImg,
    originalPrice: 7500,
    offerPrice: 6500,
    discount: 13,
  },
  {
    id: 6,
    name: "Training Shoes",
    image: trainingShoesImg,
    originalPrice: 5300,
    offerPrice: 4500,
    discount: 15,
  },
  {
    id: 7,
    name: "Casual Sneakers",
    image: casualSneakersImg,
    originalPrice: 4200,
    offerPrice: 3700,
    discount: 12,
  },
  {
    id: 8,
    name: "Skate Shoes",
    image: skateShoesImg,
    originalPrice: 4900,
    offerPrice: 4100,
    discount: 16,
  },
];

export default function Footwear() {
  const { addToCart } = useCart(); // Access addToCart from context

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6 flex gap-6">
        {/* Sidebar Filters */}
        <aside className="w-1/4 bg-gray-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Filters</h2>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-700">Category</h3>
            {["Running", "Basketball", "Football", "Casual"].map((cat) => (
              <label key={cat} className="block mb-2 cursor-pointer">
                <input type="checkbox" className="mr-2" />
                {cat}
              </label>
            ))}
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-700">Price</h3>
            {["Below ₹3000", "₹3000 - ₹5000", "Above ₹5000"].map((range) => (
              <label key={range} className="block mb-2 cursor-pointer">
                <input type="checkbox" className="mr-2" />
                {range}
              </label>
            ))}
          </div>
        </aside>

        {/* Products Grid */}
        <section className="flex-1">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Footwear</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {footwearProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {product.name}
                  </h3>

                  <div className="mb-4">
                    <p className="text-gray-500 line-through text-sm">
                      ₹{product.originalPrice}
                    </p>
                    <p className="text-gray-900 font-bold text-lg">
                      ₹{product.offerPrice}{" "}
                      <span className="text-red-600 text-sm font-medium">
                        Save {product.discount}%
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
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
