import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpsertProduct() {
  const { _id } = useParams();
  const [data, setData] = useState({
    name: "",
    price: 0,
    inStock: 0,
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here");
    let productData = {
      name: e.target.name.value,
      price: e.target.price.value,
    };
    let access_token = localStorage.getItem("access_token");
    //     let method = "post";
    //     if (_id) {
    //       method = "put";
    //     }
    axios.put(
      "https://ecommerce-sagartmg2.vercel.app/api/products",
      productData,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
  };

  return (
    <>
      <form className="container mt-5 " onSubmit={handleSubmit}>
        edit products
        <div className="grid gap-x-4 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
          <div className="form-group">
            <label htmlFor="" className="form-label required-field">
              Name
            </label>
            <input
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              className="form-control"
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label required-field">
              price
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="Price"
              name="price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              in-stock
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="in-stock"
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              description
            </label>
            <textarea
              className="form-control"
              type="number"
              placeholder="description"
            />
          </div>
        </div>
        <button className="btn-red">submit</button>
        {/* <Input name={"name"}/>
      <Input name={"price"} type="number"/> */}
      </form>
    </>
  );
}
