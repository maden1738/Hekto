import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import { Link } from "react-router-dom";
import chair from "../assets/latest_chair.png";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import noImage from "../assets/noimage.jpg";
import Footer from "../components/common/Footer";

export default function Home() {
  const [latestProduct, setLatestProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/?per_page=6")
      .then((res) => setLatestProduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  console.log(latestProduct);
  return (
    <>
      <Carousel />
      <Featured />

      <div className=" mb-[100px] mt-[100px] font-body">
        <h2 className="mb-6 text-center text-4xl font-bold text-violet-950">
          Latest Product
        </h2>
        <ul className="wrapper grid gap-[31px] md:grid-cols-2 lg:grid-cols-3">
          {latestProduct.map((el) => {
            return (
              <li className="group  hover:shadow-2xl">
                <Link to="/products/watch">
                  <div className="relative bg-slate-50 group-hover:bg-white">
                    <span className="absolute bottom-4 left-0  flex  scale-0 flex-col gap-4 p-4 group-hover:scale-100">
                      <IoCartOutline
                        className="cursor-pointer text-lg text-primary"
                        onClick={() => {
                          alert("added to cart");
                        }}
                      />
                      <FaRegHeart
                        className="cursor-pointer text-primary"
                        onClick={() => {
                          alert("added to favorites");
                        }}
                      />
                    </span>
                    <div className="flex items-center justify-center">
                      <img
                        src={el.image ? el.image : noImage}
                        alt=""
                        className="h-[220px] w-[220px] "
                      />
                    </div>
                  </div>
                  <div className="text-secondary mt-2 flex justify-between">
                    <p>{el.name}</p>
                    <p className="mr-2">${el.price}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}
