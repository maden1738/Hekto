import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Featured from "./components/Featured";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <Featured />
      <Routes>
        <Route path="pages" element={<Pages />} />
        <Route path="products" element={<Products />} />
        <Route path="blog" element={<Blog />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
