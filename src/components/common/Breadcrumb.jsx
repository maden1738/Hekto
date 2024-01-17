import React from "react";
import { Link } from "react-router-dom";

export default function breadcrumb({ name, links }) {
  return (
    <div className="wrapper flex h-[286px] flex-col justify-center bg-background font-body">
      <span className="text-text text-bold text-4xl">{name}</span>
      <ul className="flex gap-2">
        {links.map((link, index) => {
          return (
            <li>
              <Link
                to={link.url}
                className={index + 1 === links.length && "text-accent"}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <ul className="flex gap-2">
        <li>
          <Link to="/">Home .</Link>
        </li>
        <li>
          <Link to="pages">Pages .</Link>
        </li>
        <li>
          <Link to="login" className="text-accent">
            {name}
          </Link>
        </li>
      </ul> */}
    </div>
  );
}
