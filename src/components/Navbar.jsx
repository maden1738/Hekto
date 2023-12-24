import searchLens from "../assets/search.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="font-body flex items-center justify-between  my-4 px-52">
      <div className="flex items-center">
        <div className="text-4xl font-bold mr-16">Hekto</div>
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
        <div className="bg-accent flex justify-center items-center  px-2 cursor-pointer">
          <img src={searchLens} alt="" width="14px" height="14px" />
        </div>
      </div>
    </nav>
  );
}
