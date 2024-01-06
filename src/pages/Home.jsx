import React from "react";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import { Link } from "react-router-dom";
import chair from "../assets/latest_chair.png";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Carousel />
      <Featured />

      <div className="mt-[100px] font-body  ">
        <h2 className="mb-6 text-center text-4xl font-bold text-violet-950">
          Latest Product
        </h2>
        <ul className="wrapper grid gap-[31px] md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((el) => {
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
                    <img src={chair} alt="" />
                  </div>
                  <div className="text-secondary mt-2 flex justify-between">
                    <p>Cantilever Chair</p>
                    <p className="mr-2">$42.00</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
