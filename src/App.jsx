import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Accessories from "./Pages/Accessories";
import Footwear from "./Pages/Footwear";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import SignIn from './Pages/SignIn';
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    
  );
}

export default App;
