import React, { useEffect, useState } from "react";
import { API_URL } from "../constants/domain";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SellerProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let access_token = localStorage.getItem("access_token");

    axios
      .get(`${API_URL}/products?sellerproducts`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <div className="wrapper">
      <table className="wrapper mt-3  lg:mt-10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td className="border px-4 py-5">{product.name}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="flex h-full items-center gap-3 border px-4 py-2  ">
                <Link to={`/products/edit/${product._id}`}>
                  <CiEdit />
                </Link>
                <FaTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
