import React from 'react';
import { useCart } from "../Pages/CartContext"; // Import cart hook

// Import all images
import nikeShoe from '../assets/nike-shoe.jpg';
import adidasShirt from '../assets/adidas-shirt.jpg';
import pumaFootball from '../assets/puma-football.jpg';
import reebokShorts from '../assets/reebok-shorts.jpg';
import uaHoodie from '../assets/ua-hoodie.jpg';
import filaBra from '../assets/fila-bra.jpg';
import asicsShoe from '../assets/asics-shoe.jpg';
import nbJoggers from '../assets/nb-joggers.jpg';

const products = [
  { id: 1, name: "Nike Air Zoom", price: "₹4,999", image: nikeShoe },
  { id: 2, name: "Adidas Training Tee", price: "₹1,299", image: adidasShirt },
  { id: 3, name: "Puma Football", price: "₹999", image: pumaFootball },
  { id: 4, name: "Reebok Gym Shorts", price: "₹799", image: reebokShorts },
  { id: 5, name: "Under Armour Hoodie", price: "₹2,499", image: uaHoodie },
  { id: 6, name: "Fila Sports Bra", price: "₹1,199", image: filaBra },
  { id: 7, name: "Asics Running Shoes", price: "₹5,299", image: asicsShoe },
  { id: 8, name: "New Balance Joggers", price: "₹2,099", image: nbJoggers },
];

export default function FeaturedProducts() {
  const { addToCart } = useCart(); // Get addToCart from context

  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map(product => (
          <div key={product.id} className="bg-gray-100 rounded-xl p-4 shadow hover:shadow-lg transition duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-red-600 font-bold">{product.price}</p>
            <button 
               onClick={() => addToCart(product)}
               className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-red-600 transition duration-200">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
