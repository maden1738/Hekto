import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { API_URL } from "../constants/domain";

export default function UpsertProduct() {
  const { _id } = useParams();
  let initialValue = {
    name: "",
    price: "",
    in_stock: "",
    categories: [""],
    description: "",
  };
  const [data, setData] = useState(initialValue);
  const [isSubmmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (_id) {
      axios
        .get(`${API_URL}/products/${_id}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((error) => {
          toast.error("Something went wrong !! ");
        });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("here");
    let productData = data;
    let access_token = localStorage.getItem("access_token");
    setIsSubmitting(true);
    //     let method = "post";
    //     if (_id) {
    //       method = "put";
    //     }
    axios
      .post(
        "https://ecommerce-sagartmg2.vercel.app/api/products",
        productData,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      )
      .then((res) => {
        setIsSubmitting(false);
        toast("Submitted");
        setData(initialValue);
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form className="container mt-5 font-body" onSubmit={handleSubmit}>
        Edit products
        <div className="grid gap-x-4 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
          <div className="form-group">
            <label htmlFor="" className="form-label required-field">
              Name
            </label>
            <input
              value={data.name}
              onChange={handleChange}
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
              value={data.price}
              onChange={handleChange}
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
              value={data.in_stock}
              onChange={handleChange}
              className="form-control"
              type="number"
              placeholder="in-stock"
              name="in_stock"
            />
          </div>

          <div className="form-group">
            <label htmlFor="" className="form-label">
              Category{" "}
              <button type="button" className="btn-small">
                Add
              </button>
            </label>
            <div className="flex">
              <input className="form-control inline w-auto" />
              <button type="button" className="btn-small">
                delete
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="" className="form-label">
              description
            </label>
            <textarea
              value={data.description}
              onChange={handleChange}
              className="form-control"
              type="number"
              placeholder="description"
              name="description"
            />
          </div>
        </div>
        <button
          disabled={isSubmmitting}
          className="btn-red  disabled:cursor-no-drop disabled:opacity-50 "
        >
          {isSubmmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}
