import { useState } from "react";
import colors from "../assets/colors.svg";
export default function FeaturedProduct(props) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="font-body shadow-xl"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className="bg-slate-50 flex justify-center items-center px-[45px] pt-[45px] pb-6  flex-col relative">
        <img src={props.image} alt="" className="w-[178px] h-[178px] " />
        <button
          className={`btn-green ${
            hover ? "block absolute bottom-1" : "hidden"
          }`}
        >
          View Details
        </button>
      </div>
      <div
        className={`flex justify-center items-center flex-col pb-3 ${
          hover ? "bg-indigo-700 text-white " : ""
        }`}
      >
        <p className="text-accent text-lg font-bold pt-4">{props.title}</p>
        <img src={colors} alt="" className="py-4" />
        <p className="text-sm">Code: {props.code}</p>
        <p className="text-sm">${props.price}</p>
      </div>
    </div>
  );
}
