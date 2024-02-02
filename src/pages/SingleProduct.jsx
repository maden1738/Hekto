import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart, setCart } from "../app/slice/cartSlice";
import useAuthenticate from "../hooks/useAuthenticate";
import { FaStar } from "react-icons/fa";

export default function SingleProduct() {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState();
  let productId = useParams();
  const authenticate = useAuthenticate();
  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    axios
      .get(
        `https://ecommerce-sagartmg2.vercel.app/api/products/${productId.slug}`,
      )
      .then((res) => setProductDetails(res.data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {productDetails && (
        <Breadcrumb
          name={productDetails.name}
          links={[
            { title: "Home", url: "/" },
            { title: "Pages", url: "pages" },
            { title: "Product Details", url: "#" },
          ]}
        />
      )}

      {productDetails && (
        <div>
          <section className=" flex flex-col items-center justify-center  gap-4  py-28 font-body lg:flex-row lg:gap-[41px]">
            <div>
              <img
                src={productDetails.image}
                alt=""
                className="max-w-[375px] object-cover lg:h-[364px]"
              />
            </div>
            <div className="flex flex-col ">
              <p className="text-4xl font-semibold text-text">
                {productDetails.name}
              </p>
              <p>${productDetails.price}</p>
              <p className="text-subText">{productDetails.description}</p>
              <div className="flex text-text lg:gap-[26px] lg:py-4">
                <button
                  className=""
                  type="button"
                  onClick={() => {
                    authenticate(() => {
                      dispatch(addToCart(productDetails));
                      alert("added to cart");
                    });
                  }}
                >
                  Add to Cart
                </button>
                <FaRegHeart />
              </div>
              <div>
                <p className="text-text">Categories:</p>
                <p className="text-text">Tags:</p>
                <p className="text-text">Share:</p>
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  authenticate(() => {
                    const review = {
                      rating: event.target.rating.value,
                      comment: event.target.comment.value,
                    };
                    axios
                      .put(
                        "https://ecommerce-sagartmg2.vercel.app/api/products/review/" +
                          productId.slug,
                        review,
                        {
                          headers: { Authorization: `Bearer ${access_token}` },
                        },
                      )
                      .then((res) => toast("review added"))
                      .catch((err) => console.log(err));
                  });
                }}
                className="mt-3 flex flex-col gap-2"
              >
                <select name="rating" className="border py-2">
                  <option disabled selected>
                    rating
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <textarea
                  type="text"
                  name="comment"
                  className=" border px-2 py-2"
                  placeholder="comment"
                />
                <button className="btn-red">Add Review</button>
              </form>
            </div>
          </section>
          <section className="wrapper ">
            <p className="text-2xl text-subText">Reviews:</p>
            {productDetails.reviews.map((review) => (
              <>
                <div className="mb-10 flex items-center justify-start gap-4 text-text">
                  <p className="flex items-center gap-2">
                    {review.rating}
                    <FaStar className="text-yellow-400" />
                  </p>
                  <p>{review.comment}</p>
                </div>
              </>
            ))}
          </section>
        </div>
      )}
    </>
  );
}
