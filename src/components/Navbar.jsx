import searchLens from "../assets/search.png";

export default function Navbar() {
  return (
    <nav className="font-body flex items-center justify-around px-14 my-4">
      <div className="flex items-center">
        <div className="text-4xl font-bold mr-16">Hekto</div>
        <ul className="flex gap-8">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Contact</a>
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
