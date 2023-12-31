import searchLens from "../assets/search.png";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="wrapper my-4 flex items-center font-body  md:px-[8%] lg:justify-between  xl:px-[15%] ">
      <div className="mr-auto flex items-center gap-16">
        <div className="text-4xl font-bold ">Hekto</div>
        <ul className="hidden lg:flex lg:gap-8 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <IoMenuSharp className="lg:hidden" />
      <form className="flex">
        <input type="text" className="border border-gray-300" />
        <button className="flex cursor-pointer items-center justify-center  bg-accent px-2">
          <img src={searchLens} alt="" width="14px" height="14px" />
        </button>
      </form>
    </nav>
  );
}
