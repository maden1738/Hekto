import React, { useEffect, useState } from "react";
import FeaturedProduct from "../components/FeaturedProduct";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [viewType, setviewType] = useState("grid");

  useEffect(() => {
    axios
      .get(
        `https://ecommerce-sagartmg2.vercel.app/api/products?per_page=50&search_term=${searchTerm}`,
      )
      .then((res) => {
        setProducts(res.data.products); //[ {},{}]
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex">
      <ul className="wrapper mt-24 grid gap-4 sm:mt-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:mt-[226px] ">
        {products.map((el) => {
          return <FeaturedProduct key={el._id} product={el} />;
        })}
      </ul>
    </div>
  );
}
