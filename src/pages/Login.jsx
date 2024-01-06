import React from "react";
import Intro from "../components/common/Intro";
import Footer from "../components/common/Footer";

export default function () {
  return (
    <>
      <Intro />
      <div className="flex justify-center font-body ">
        <div className="my-10  flex flex-col items-center lg:my-24 lg:p-12 lg:shadow ">
          <h1 className="bold text-[32px]">Login</h1>
          <p className="text-subText">
            Please login using account detail bellow.
          </p>
          <form action="" className="mt-8 flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-sm  border border-slate-300 py-4  pl-4 pr-40"
            />
            <input
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
