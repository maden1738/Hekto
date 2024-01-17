import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import axios from "axios";

export default function () {
  function handleSubmit(event) {
    event.preventDefault();
    axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
      email: event.target.email.value,
      password: event.target.password.value,
    });
  }

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
          <h1 className="bold text-[32px]">Login</h1>
          <p className="text-subText">
            Please login using account detail bellow.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="rounded-sm  border border-slate-300 py-4  pl-4 pr-4"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="rounded-sm border border-slate-300 py-4 pl-4 pr-40"
            />
            <span className="text-subText">Forgor your Password?</span>
            <button className="btn-red">Sign In</button>
          </form>
          <span className="text-subText mt-5">
            Don't have an Account?Create account
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}
