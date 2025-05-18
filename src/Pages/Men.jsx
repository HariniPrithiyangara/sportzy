import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../Pages/CartContext";

// Local images
import adidasShoes from "../assets/adidas.png";
import apparelImg from "../assets/apparel.png";
import accessoriesImg from "../assets/accessories.png";
import equipmentImg from "../assets/equipment.png";
import tshirtsImg from "../assets/t-shirt.png";
import shortsImg from "../assets/short.png";
import jacketsImg from "../assets/jacket.png";
import socksImg from "../assets/socks.png";

const menProducts = [
  {
    id: 1,
    name: "Adidas Running Shoes",
    image: adidasShoes,
    originalPrice: 3999,
    offerPrice: 1999,
    discount: 50,
  },
  {
    id: 2,
    name: "Men's Apparel",
    image: apparelImg,
    originalPrice: 2499,
    offerPrice: 1499,
    discount: 40,
  },
  {
    id: 3,
    name: "Smartwatch Accessories",
    image: accessoriesImg,
    originalPrice: 1599,
    offerPrice: 1099,
    discount: 31,
  },
  {
    id: 4,
    name: "Gym Equipment",
    image: equipmentImg,
    originalPrice: 4999,
    offerPrice: 3499,
    discount: 30,
  },
  {
    id: 5,
    name: "T-shirts",
    image: tshirtsImg,
    originalPrice: 1499,
    offerPrice: 899,
    discount: 40,
  },
  {
    id: 6,
    name: "Shorts",
    image: shortsImg,
    originalPrice: 1299,
    offerPrice: 799,
    discount: 38,
  },
  {
    id: 7,
    name: "Jackets",
    image: jacketsImg,
    originalPrice: 3499,
    offerPrice: 2499,
    discount: 29,
  },
  {
    id: 8,
    name: "Socks",
    image: socksImg,
    originalPrice: 399,
    offerPrice: 299,
    discount: 25,
  },
];

export default function Men() {
  const { addToCart } = useCart();

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
              Red
            </label>
          </div>

          {/* Gender Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-700">Gender</h3>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Men
            </label>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Unisex
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
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Men's Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {menProducts.map(
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
                      className="w-full bg-black text-white py-2 rounded hover:bg-red-600 transition"
                      onClick={() =>
                        addToCart({ id, name, image, price: offerPrice })
                      }
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
