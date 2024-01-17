import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";

export default function SingleProduct() {
  const [productDetails, setProductDetails] = useState();
  let productId = useParams();

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
            <p className="text-text text-4xl font-semibold">
              {productDetails.name}
            </p>
            <p>${productDetails.price}</p>
            <p className="text-subText">{productDetails.description}</p>
            <div className="text-text flex gap-[26px] py-4">
              <button className="">Add to Cart</button>
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
    </>
  );
}
