import Home from "./pages/Home";
import Shop from "./pages/Shop.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx"; 
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {ShoppingCartProvider } from "./context/ShoppingCartContext";
import SingleProductPage from "./pages/SingleProductPage";
import Notfound from "./pages/Notfound";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" exact index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </ShoppingCartProvider>
  );
};

export default App;
