import { useState } from "react";
import colors from "../assets/colors.svg";
export default function FeaturedProduct(props) {
  return (
    <div className="group font-body shadow-xl">
      <div className="relative flex flex-col items-center justify-center bg-slate-50 px-[45px]  pb-6 pt-[45px]">
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
