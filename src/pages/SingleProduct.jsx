import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart, setCart } from "../app/slice/cartSlice";
import useAuthenticate from "../hooks/useAuthenticate";

export default function SingleProduct() {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState();
  let productId = useParams();
  const authenticate = useAuthenticate();

  useEffect(() => {
    axios
      .get(
        `https://ecommerce-sagartmg2.vercel.app/api/products/${productId.slug}`,
      )
      .then((res) => setProductDetails(res.data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {productDetails && (
        <Breadcrumb
          name={productDetails.name}
          links={[
            { title: "Home", url: "/" },
            { title: "Pages", url: "pages" },
            { title: "Product Details", url: "#" },
          ]}
        />
      )}

      {productDetails && (
        <div className="flex  items-center justify-center py-28 font-body shadow lg:gap-[41px]">
          <div>
            <img src={productDetails.image} alt="" className="max-w-[375px]" />
          </div>
          <div>
            <p className="text-4xl font-semibold text-text">
              {productDetails.name}
            </p>
            <p>${productDetails.price}</p>
            <p className="text-subText">{productDetails.description}</p>
            <div className="flex gap-[26px] py-4 text-text">
              <button
                className=""
                type="button"
                onClick={() => {
                  authenticate(() => {
                    dispatch(addToCart(productDetails));
                    alert("added to cart");
                  });
                }}
              >
                Add to Cart
              </button>
              <FaRegHeart />
            </div>
            <div>
              <p className="text-text">Categories:</p>
              <p className="text-text">Tags:</p>
              <p className="text-text">Share:</p>
            </div>
          </div>
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.error("login requried.");
        }}
      >
        <input type="text" className="border px-4 py-2" />
        <input type="text" className="border px-4 py-2" />
        <button className="btn-red">Add Review</button>
      </form>
    </>
  );
}
