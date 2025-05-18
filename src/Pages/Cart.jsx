// Cart.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../Pages/CartContext";

export default function Cart() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <div className="min-h-screen px-4 py-20 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-center text-xl">Your cart is empty.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-10">
              {/* Cart Items */}
              <div className="md:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-6 p-4 bg-white rounded-lg shadow-md"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-red-600 font-medium">₹{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="font-medium">₹{calculateTotal()}</span>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-gray-700">Shipping</span>
                  <span className="font-medium">₹0</span>
                </div>
                <div className="border-t border-gray-300 pt-4 flex justify-between text-xl font-semibold">
                  <span>Total</span>
                  <span>₹{calculateTotal()}</span>
                </div>
                <button
                  onClick={() => navigate("/checkout")}
                  className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-semibold"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
