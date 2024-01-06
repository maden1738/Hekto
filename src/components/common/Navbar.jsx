import searchLens from "../../assets/search.png";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="wrapper  my-4  flex  justify-between font-body md:px-[8%] lg:justify-between ">
      <div className=" flex lg:gap-16">
        <div className="text-4xl font-bold">Hekto</div>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden lg:flex"
          }  translate-x-[40px] translate-y-[40px]  flex-col transition-all duration-1000 md:translate-x-[280px] md:translate-y-0 lg:transform-none  lg:flex-row lg:items-center lg:gap-8`}
        >
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

      <div className="flex max-h-[40px] grow-0 items-center">
        <IoMenuSharp className=" lg:hidden" onClick={toggleMenu} />
        <form className="flex ">
          <input
            type="text"
            className="border border-gray-300  focus:border-accent focus:outline-none"
          />
          <button className="flex cursor-pointer items-center justify-center  bg-accent px-2">
            <img src={searchLens} alt="" width="14px" height="14px" />
          </button>
        </form>
      </div>
    </nav>
  );
}
