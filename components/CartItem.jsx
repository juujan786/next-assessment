import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import Image from "next/image";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <tr className="shadow-lg hover:shadow-2xl rounded-2xl items-center">
      <td className="flex justify-center items-center">
        <div className="relative w-[70px] py-4 h-[70px] rounded-lg shadow-lg overflow-hidden">
          <Image
            // className="object-contain"
            fill
            src={item.image}
            alt="ProductImage"
          />
        </div>
      </td>
      <td className="text-center">{item.title.slice(0, 7)}...</td>
      <td className="text-center">${item.price}</td>
      <td className="text-center">
        <button
          onClick={() => dispatch(cartActions.removeItemFromCart(item.id))}
          className="outline-none border-2 border-black py-1 px-4 bg-black text-white rounded-lg hover:bg-white hover:text-black transition-all"
        >
          -
        </button>
        <span className="px-2">{item.quantity}</span>
        <button
          onClick={() => dispatch(cartActions.addItemToCart(item))}
          className="outline-none border-2 border-black py-1 px-4 bg-black text-white rounded-lg hover:bg-white hover:text-black transition-all"
        >
          +
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
