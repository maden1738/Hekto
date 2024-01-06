import React from "react";

export default function Footer() {
  return (
    <>
      <div className="wrapper   flex flex-col gap-9  bg-background py-24 font-body lg:flex-row lg:justify-between   lg:text-left">
        <section className="flex flex-col items-center gap-2 lg:items-start">
          <span className=" text-[38px] font-bold">Hekto</span>
          <div className="flex ">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="py-3 pl-4 pr-4 lg:pr-10"
            />
            <button className="btn-red">Sign Up</button>
          </div>
          <p className="text-subText">Contact Info</p>
          <p className="text-subText text-center">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </section>

        <section className="flex flex-col items-center gap-2 lg:items-start">
          <span className="text-[22px] font-semibold">Categories</span>
          <ul className="text-subText py- text-center lg:text-left">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Video Games & Console</li>
            <li>Headphones</li>
          </ul>
        </section>

        <section className="flex flex-col items-center gap-2 lg:items-start">
          <span className="text-[22px] font-semibold">Customer Care</span>
          <ul className="text-subText py- text-center lg:text-left">
            <li>My Account</li>
            <li>Discounts</li>
            <li>Returns</li>
            <li>Orders History</li>
          </ul>
        </section>

        <section className="flex flex-col items-center gap-2 lg:items-start">
          <span className="text-[22px] font-semibold">Pages</span>
          <ul className="text-subText text-center lg:text-left ">
            <li>Blog</li>
            <li>Browse the page</li>
            <li>Category</li>
            <li>Visual Composer Elements</li>
          </ul>
        </section>
      </div>
      <div className="wrapper text-subText bg-violet-100 py-4">
        Swarna Jang Maden
      </div>
    </>
  );
}
