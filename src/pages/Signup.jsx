import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        name: event.target.name.value,
        role: event.target.role.value,
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((res) => {
        // when status code in 2's line
        toast("signup successful!");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        /*
         "errors": [
        {
            "value": "ram@gmail.com",
            "msg": "E-mail already in use",
            "param": "email",
            "location": "body"
        },
        {
            "value": "ram@gmail.com",
            "msg": "E-mail already in use",
            "param": "email",
            "location": "body"
        },
    ]
     */
        let errorMsg = "";
        err.response.data.errors.forEach((el) => {
          errorMsg += `${el.param}: ${el.msg} , \n `;
        });
        toast.error(errorMsg);
        // when status code 3,4,5
      });
  };
  return (
    <>
      <Breadcrumb
        name="My Account"
        links={[
          { title: "Home", url: "/" },
          { title: "Pages", url: "pages" },
          { title: "My Account", url: "#" },
        ]}
      />
      <div className="flex justify-center font-body ">
        <div className="my-10  flex flex-col items-center lg:my-24 lg:p-12 lg:shadow ">
          <h1 className="bold text-[32px]">Signup</h1>
          <p className="text-subText">Please signup using your email address</p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <input
              name="name"
              type="text"
              placeholder="UserName"
              className="rounded-sm  border border-slate-300 py-4  pl-4 pr-4"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="rounded-sm  border border-slate-300 py-4  pl-4 pr-4"
            />
            <select
              name="role"
              id=""
              className="text- rounded-sm border border-slate-300 py-1 pl-4"
            >
              <option value="">select role</option>
              <option value="seller">seller</option>
              <option value="buyer">buyer</option>
            </select>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="rounded-sm border border-slate-300 py-4 pl-4 pr-40"
            />
            <button className="btn-red">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}
