import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../app/slice/userSlice";

export default function Header() {
  const user = useSelector((store) => store.user.value);
  const dispatch = useDispatch();
  console.log(user);
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
          <span className="cursor-pointer" onClick={() => dispatch(logout())}>
            Logout
          </span>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <div>WishList</div>
      </div>
    </section>
  );
}
