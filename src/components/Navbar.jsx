import searchLens from "../assets/search.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="my-4 flex items-center justify-between  font-body lg:px-[8%] xl:px-[15%] ">
      <div className="flex items-center gap-16">
        <div className="text-4xl font-bold ">Hekto</div>
        <ul className="flex gap-8">
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

      <div className="flex">
        <input type="text" className="border border-gray-300" />
        <div className="flex cursor-pointer items-center justify-center  bg-accent px-2">
          <img src={searchLens} alt="" width="14px" height="14px" />
        </div>
      </div>
    </nav>
  );
}
