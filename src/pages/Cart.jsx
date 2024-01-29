import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((store) => store.cart.value);
  return (
    <div className=" wrapper  my-8 grid grid-cols-4 gap-2">
      {cart.map((el) => {
        return (
          <div className="margin-auto rounded border p-4 shadow-sm">
            <p>Name: {el.name}</p>
            <p>Quantity: {el.quantity}</p>
          </div>
        );
      })}
    </div>
  );
}
