import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="wrapper   flex flex-col gap-9  bg-background py-24 font-body lg:flex-row lg:justify-between   lg:text-left">
        <section className="flex flex-col items-center gap-2 lg:items-start">
          <span className=" text-[38px] font-bold">Hekto</span>
          <div className="flex ">
            <button
              className="btn-red"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </button>
          </div>
          <p className="text-subText">Contact Info</p>
          <p className=" text-subText">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </section>

        <section className="flex flex-col items-center gap-2 lg:items-start">
          <span className="text-[22px] font-semibold">Categories</span>
          <ul className="py- text-center text-subText lg:text-left">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Video Games & Console</li>
            <li>Headphones</li>
          </ul>
        </section>

        <section className="flex flex-col items-center gap-2 lg:items-start">
          <span className="text-[22px] font-semibold">Customer Care</span>
          <ul className="py- text-center text-subText lg:text-left">
            <li>My Account</li>
            <li>Discounts</li>
            <li>Returns</li>
            <li>Orders History</li>
          </ul>
        </section>

        <section className="flex flex-col items-center gap-2 lg:items-start">
          <span className="text-[22px] font-semibold">Pages</span>
          <ul className="text-center text-subText lg:text-left ">
            <li>Blog</li>
            <li>Browse the page</li>
            <li>Category</li>
            <li>Visual Composer Elements</li>
          </ul>
        </section>
      </div>
      <div className="wrapper bg-violet-100 py-4 text-subText">
        Swarna Jang Maden
      </div>
    </>
  );
}
