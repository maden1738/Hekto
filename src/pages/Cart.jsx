import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";
import { decrement, increment } from "../app/slice/cartSlice";

export default function Cart() {
  const cart = useSelector((store) => store.cart.value);
  const dispatch = useDispatch();

  function handleDecrement(event, product) {
    dispatch(decrement(product));
  }

  function handleIncrement(event, product) {
    dispatch(increment(product));
  }

  return (
    <div className=" wrapper  my-8 grid grid-cols-3 gap-2">
      {cart.map((el) => {
        return (
          <div className=" rounded border p-4 shadow-sm">
            <p className="text-subText">
              Name:
              <span className="ml-2 text-xl text-text">{el.name} </span>
            </p>
            <p className=" flex text-subText">
              Quantity:{" "}
              <span className="ml-2 flex items-center gap-2 text-xl text-text">
                <FaRegMinusSquare
                  className="cursor-pointer"
                  onClick={(event) => {
                    handleDecrement(event, el);
                  }}
                />
                {el.quantity}
                <FaRegPlusSquare
                  className="cursor-pointer"
                  onClick={(event) => {
                    handleIncrement(event, el);
                  }}
                />
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
