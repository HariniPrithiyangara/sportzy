import { useState } from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar({ cartCount = 0 }) {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          <span className="text-black">SPORT</span>
          <span className="text-red-600">ZY</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 max-w-xl">
          <input
            type="text"
            placeholder="Enter your search keywords..."
            className="w-full border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Link to="/signin" className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-500 transition">
            <FaUser />
            <span>Sign In</span>
          </Link>

          <Link to="/cart" className="relative cursor-pointer text-gray-800 hover:text-red-600">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-black text-white text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 py-2 flex gap-8 relative">
          {/* Browse Categories Dropdown */}
          <div className="relative">
            <button
              className="hover:text-red-500 transition"
              onClick={() => setShowCategories(!showCategories)}
            >
              Browse Categories
            </button>
            {showCategories && (
              <ul className="absolute bg-white text-black shadow-md rounded mt-2 w-48 z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/men" onClick={() => setShowCategories(false)}>Men</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/women" onClick={() => setShowCategories(false)}>Women</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/kids" onClick={() => setShowCategories(false)}>Kids</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/footwear" onClick={() => setShowCategories(false)}>Footwear</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/accessories" onClick={() => setShowCategories(false)}>Accessories</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Navigation Links */}
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/products" className="hover:text-red-500 transition">Products</Link>
          <Link to="/blog" className="hover:text-red-500 transition">Blog</Link>
          <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
