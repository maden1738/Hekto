import { useState } from "react";
import colors from "../assets/colors.svg";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

export default function FeaturedProduct(props) {
  return (
    <div className="group font-body shadow-xl">
      <div className="relative flex flex-col items-center justify-center bg-slate-50 px-[45px]  pb-6 pt-[45px]">
        <span className="absolute left-0 top-0 flex scale-0 gap-4 p-4 group-hover:scale-100">
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
        <img src={props.image} alt="" className="h-[178px] w-[178px] " />
        <button
          className="btn-green hidden
            group-hover:absolute group-hover:bottom-1 group-hover:block
          "
        >
          View Details
        </button>
      </div>

      <div className="flex flex-col items-center justify-center pb-3 group-hover:bg-indigo-700 group-hover:text-white ">
        <p className="pt-4 text-lg font-bold text-accent">{props.title}</p>
        <img src={colors} alt="" className="py-4" />
        <p className="text-sm">Code: {props.code}</p>
        <p className="text-sm">${props.price}</p>
      </div>
    </div>
  );
}
