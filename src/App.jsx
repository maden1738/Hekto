import Home from "./pages/Home";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";

import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="pages" element={<Pages />} />
        <Route path="products">
          <Route path="" element={<Products />} />
          <Route path=":slug" element={<SingleProduct />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
