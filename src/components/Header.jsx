import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
export default function Header() {
  return (
    <section className="bg-primary  text-white font-semibold flex justify-between py-2 font-body lg:px-[8%] xl:px-[15%]  ">
      <div className="flex gap-9">
        <div className="flex gap-2 items-center">
          <CiMail />
          <div>mhhasanul@gmail.com</div>
        </div>
        <div className="flex gap-2 items-center">
          <BsTelephone />
          <div>(12345)67890</div>
        </div>
      </div>
      <div className="flex gap-4">
        <select name="language" id="" className="bg-inherit">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
        <select name="currency" id="" className="bg-inherit">
          <option value="usd">USD</option>
          <option value="nrs">NRS</option>
        </select>
        <Link to="/login">Login</Link>
        <div>WishList</div>
      </div>
    </section>
  );
}
