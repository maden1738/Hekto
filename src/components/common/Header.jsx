import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

import { logout } from "../../app/slice/userSlice";
import ProtectedComponent from "./ProtectedComponent";

export default function Header() {
  const user = useSelector((store) => store.user.value);
  const cart = useSelector((store) => store.cart.value);
  const dispatch = useDispatch();
  // console.log(user);
  return (
    <section className="wrapper flex flex-col items-center gap-2 bg-primary py-2 font-body font-semibold text-white  lg:flex-row lg:justify-between   ">
      <div className="flex gap-4 lg:gap-9">
        <div className="flex items-center gap-2">
          <CiMail className="text-xl" />
          <div>mhhasanul@gmail.com</div>
        </div>
        <div className="flex items-center gap-2">
          <BsTelephone />
          <div>(12345)67890</div>
        </div>
      </div>

      {user?.name && <span>hi, {user.name}</span>}

      <div className="flex gap-4">
        <select name="language" id="" className="bg-inherit">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
        <select name="currency" id="" className="bg-inherit">
          <option value="usd">USD</option>
          <option value="nrs">NRS</option>
        </select>
        {user?.name ? (
          <div className="flex gap-4">
            <span className="cursor-pointer" onClick={() => dispatch(logout())}>
              Logout
            </span>
            <ProtectedComponent role="buyer">
              <Link
                to="cart"
                className="flex cursor-pointer items-center gap-1"
              >
                <FaShoppingCart /> ({cart})
              </Link>
            </ProtectedComponent>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </section>
  );
}
