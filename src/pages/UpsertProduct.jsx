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
    image: null,
    description: "",
  };
  const [data, setData] = useState(initialValue);
  const [isSubmmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState({});

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
    // let productData = data;
    let access_token = localStorage.getItem("access_token");
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("image", data.image);
    data.categories.forEach((cat) => {
      formData.append("categories", cat);
    });
    setIsSubmitting(true);
    let url = "https://ecommerce-sagartmg2.vercel.app/api/products";
    let method = "post";
    if (_id) {
      method = "put";
      url = "https://ecommerce-sagartmg2.vercel.app/api/products/" + _id;
    }
    axios[method](url, formData, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => {
        setIsSubmitting(false);
        if (!_id) {
          toast("product created.");
          setData(initialValue);
        } else {
          toast("product updated.");
        }
      })
      .catch((err) => {
        setIsSubmitting(false);
        if (err.response?.status === 400) {
          console.log(err.response.data);
          let errObj = {};
          err.response.data.errors.forEach((el) => {
            errObj[el.param] = el.msg;
          });
          setValidationError(errObj);
        }
        // console.log(err.response.data);
      });
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]:
        event.target.type == "file"
          ? event.target.files[0]
          : event.target.value,
    });
  };
  const handleCategoryChange = (event, position) => {
    setData({
      ...data,
      categories: data.categories.map((category, index) => {
        if (position == index) {
          return event.target.value;
        }
        return category;
      }),
    });
  };
  const handleDelete = (event, index) => {
    console.log(index);
    setData({
      ...data,
      categories: data.categories.filter((category, idx) => idx !== index),
    });
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

            {validationError.name && (
              <span className="text-sm text-red-500">
                {validationError.name}
              </span>
            )}
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
            {validationError.price && (
              <span className="text-sm text-red-500">
                {validationError.price}
              </span>
            )}
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
              <button
                type="button"
                className="btn-small"
                onClick={() => {
                  setData({ ...data, categories: [...data.categories, ""] });
                }}
              >
                Add
              </button>
            </label>
            {data.categories.map((category, index) => (
              <div className="my-1 flex" key={index}>
                <input
                  className="form-control inline w-auto"
                  name="category"
                  value={category}
                  onChange={(event) => {
                    handleCategoryChange(event, index);
                  }}
                />
                <button
                  type="button"
                  className="btn-small"
                  onClick={(event) => handleDelete(event, index)}
                >
                  delete
                </button>
              </div>
            ))}
          </div>

          <div className="form-group">
            <label htmlFor="" className="form-label">
              Image
            </label>
            <input
              className="form-control"
              type="file"
              name="image"
              onChange={handleChange}
            />
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
