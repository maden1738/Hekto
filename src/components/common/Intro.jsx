import React from "react";
import { Link } from "react-router-dom";

export default function Intro(props) {
  return (
    <div className="wrapper flex h-[286px] flex-col justify-center bg-background font-body">
      <span className="text-text text-bold text-4xl">My Account</span>

      <ul className="flex gap-2">
        <li>
          <Link to="">Home .</Link>
        </li>
        <li>
          <Link to="pages">Pages .</Link>
        </li>
        <li>
          <Link to="login" className="text-accent">
            My account{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
