import colors from "../assets/colors.svg";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, setCart } from "../app/slice/cartSlice";
import useAuthenticate from "../hooks/useAuthenticate";

export default function FeaturedProduct({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authenticate = useAuthenticate();
  return (
    <div className="group font-body shadow-xl">
      <div className="relative flex h-[236px]  flex-col items-center justify-center  bg-slate-50   pb-6 pt-[45px]">
        <span className="absolute left-0 top-0 flex scale-0 gap-4 p-4 group-hover:scale-100">
          <IoCartOutline
            className="cursor-pointer text-lg text-primary"
            onClick={() => {
              authenticate(() => {
                alert("added to cart");
                dispatch(addToCart(product));
              });
            }}
          />
          <FaRegHeart
            className="cursor-pointer text-primary"
            onClick={() => {
              alert("added to favorites");
            }}
          />
        </span>
        <img
          src={product.image}
          alt=""
          className="h-[178px] w-[178px] rounded-md object-cover"
        />
        <button
          className="btn-green hidden
            group-hover:absolute group-hover:bottom-1 group-hover:block
          "
          onClick={() => {
            navigate(`/products/${product._id}`);
          }}
        >
          View Details
        </button>
      </div>

      <div className="flex flex-col items-center justify-center pb-3 group-hover:bg-indigo-700 group-hover:text-white ">
        <p className="pt-4 text-lg font-bold text-accent">{product.name}</p>
        <img src={colors} alt="" className="py-4" />
        <p className="text-sm">Code: {product.count}</p>
        <p className="text-sm">${product.price}</p>
      </div>
    </div>
  );
}
