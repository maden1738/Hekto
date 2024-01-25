import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUser } from "../app/slice/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { API_URL } from "../constants/domain";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${API_URL}/users/login`, {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((res) => {
        toast("Login Succesful");
        navigate("/");
        dispatch(setUser(res.data.user));
        localStorage.setItem("access_token", res.data.access_token);
        //res.data.user.name
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          return toast.error("Invalid credentials");
        }
        return toast.error("Something went wrong.Try again later");
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
          <span className="mt-5 text-subText">
            <p>
              Don't have an Account?{" "}
              <span
                className="cursor-pointer hover:underline"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create account
              </span>
            </p>
          </span>
        </div>
      </div>
    </>
  );
}
