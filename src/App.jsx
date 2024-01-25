import Home from "./pages/Home";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";

import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Addproduct from "./pages/Addproduct";
import SingleProduct from "./pages/SingleProduct";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "./app/slice/userSlice";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/common/ProtectedRoute";
import SellerProducts from "./pages/SellerProducts";
import EditProduct from "./pages/EditProduct";
import UpsertProduct from "./pages/UpsertProduct";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let access_token = localStorage.getItem("access_token");
    if (access_token) {
      axios
        .get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => {
          setIsLoading(false);
          dispatch(setUser(res.data));
        })
        .catch((error) => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <p>logo./ quotes/ spinner</p>
        </div>
      ) : (
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
            <Route path="signup" element={<Signup />} />
            <Route path="" element={<ProtectedRoute role="buyer" />}>
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="products" element={<ProtectedRoute role="seller" />}>
              <Route path="seller" element={<SellerProducts />} />
              <Route path="add" element={<UpsertProduct />} />
              <Route path="edit/_:id" element={<UpsertProduct />} />
            </Route>
          </Routes>
          <Footer />
        </>
      )}

      <ToastContainer />
    </>
  );
}

export default App;
