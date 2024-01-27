"use client";
import React from "react";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  if (items.length === 0) {
    return (
      <div className="w-full flex justify-center mt-20">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="w-[90%] md:w-[85%] lg:w-[85%] 2xl:w-[1300px] mx-auto">
      <h1 className="text-2xl">Your Cart</h1>
      <div className="flex justify-between flex-col gap-6 lg:flex-row">
        <table className="w-full lg:w-[65%]">
          <thead>
            <tr className="text-[#8B8B8B]">
              <td className="text-center"></td>
              <td className="text-center">Name</td>
              <td className="text-center">Price</td>
              <td className="text-center">Quantity</td>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
        <div className="w-full lg:w-[30%]">
          <div className="p-4  shadow-lg rounded-lg">
            <h1 className="text-xl my-4">Your Total</h1>
            <div className="flex flex-col justify-between">
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.title.slice(0, 20)}...{" "}
                      <span className="text-[#8B8B8B]">X {item.quantity}</span>
                    </span>
                    <span>${item.itemTotalPrice}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between my-4">
                <span className="text-lg">Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-black border-2 border-black py-2 px-6 rounded-xl flex justify-center gap-2 text-white hover:bg-white hover:text-black transition-all delay-100 ease-in-out">
              <span>Checkout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
