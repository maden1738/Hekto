import React from "react";
import axios from "axios";

export default function EditProduct() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here");
    let productData = {
      name: e.target.name.value,
      price: e.target.price.value,
    };
    console.log(productData);
    let access_token = localStorage.getItem("access_token");

    axios.post(
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
              value="watch"
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
